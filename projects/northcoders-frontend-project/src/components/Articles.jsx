import React, { useState, useEffect } from 'react';
import {
  getAllArticles,
  getArticleByTopic,
  getArticleById,
  getCommentsByArticleId,
  increaseVotesByOne,
  deleteCommentByArticleId,
} from '../utils/api';
import { Link, useParams } from 'react-router-dom';
import '../styles/App.css';
import Tilt from 'react-parallax-tilt';
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCommentByArticleId } from '../utils/api';

export default function Articles({ loggedIn, user }) {
  const { topic } = useParams();
  const { article_id } = useParams();
  const [articles, setArticles] = useState([]);
  const [isArticle, setIsArticle] = useState(false);
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('DESC');
  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState(false);

  const notifyLike = () => toast('You must be logged in to like this article!');
  const notifyAlrLike = () => toast('You have already liked this article!');
  const notifyComment = () => toast('You must be logged in to comment on this article!');

  useEffect(() => {
    setLoading(true);
    setIsArticle(false);
    const makeAsync = async () => {
      let articles = undefined;
      if (topic === undefined) {
        articles = await getAllArticles(sortBy, sortOrder);
      } else {
        articles = await getArticleByTopic(topic, sortBy, sortOrder);
      }
      setArticles(articles);
      if (article_id !== undefined) {
        setIsArticle(true);
        const article = await getArticleById(article_id);
        setArticle(article);
        const comments = await getCommentsByArticleId(article_id);
        setComments(comments);
      }
      setLoading(false);
    };
    makeAsync();
  }, [topic, article_id, sortBy, sortOrder]);

  function incLikes() {
    setLiked(true);
    setArticle({ ...article, votes: article.votes + 1 });
    increaseVotesByOne(article_id);
  }

  function leaveAComment(e) {
    e.preventDefault();
    if (!loggedIn) {
      notifyComment();
      return;
    }
    setComments([
      {
        author: user.username,
        body: comment,
        comment_id: 1000000000000,
        created_at: '1970-01-01T00:00:00.000Z',
        votes: 0,
      },
      ...comments,
    ]);
    setComment('');
    addCommentByArticleId(article_id, user.username, comment);
  }

  function deleteComment(e, comment_id) {
    e.preventDefault();
    const newComments = comments.filter((comment) => comment.comment_id !== comment_id);
    setComments(newComments);
    deleteCommentByArticleId(comment_id);
  }

  if (isArticle)
    return (
      <>
        <ToastContainer />
        <h1 className='Header'>
          {article.title}{' '}
          <span className='ArticleAuthor'>
            — @{article.author} #{article.topic}
          </span>
        </h1>
        <h2 className='ArticleBody'>{article.body}</h2>
        <h3>
          Likes: {article.votes}, Comments: {article.comment_count}
        </h3>
        <br />
        <button
          className='ArticleButton'
          onClick={() => {
            loggedIn ? (liked ? notifyAlrLike() : incLikes()) : notifyLike();
          }}
        >
          <FontAwesomeIcon icon={faThumbsUp} /> Leave a like!
        </button>
        <button
          className='ArticleButton'
          onClick={() => {
            setShowComments((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faMessage} /> {showComments ? 'Hide comments!' : 'Show comments!'}
        </button>
        {showComments && (
          <div className='ArticleComments'>
            <form
              className='CommentBox'
              onSubmit={(e) => {
                leaveAComment(e);
              }}
            >
              <input
                type='text'
                comment='comment'
                value={comment}
                className='CommentInput'
                placeholder='Leave a comment...'
                onChange={(e) => setComment(e.target.value)}
              />
              <input type='submit' value='Comment' className='CommentButton' />
            </form>
            {comments.map((comment) => {
              return (
                <div className='ArticleComment' key={comment.comment_id}>
                  <h3>{comment.author}</h3>
                  <p>{comment.body}</p>
                  <p>
                    <FontAwesomeIcon icon={faThumbsUp} /> {comment.votes}
                    {comment.author === user.username && (
                      <button
                        className='NoStyle'
                        onClick={(e) => deleteComment(e, comment.comment_id)}
                      >
                        <FontAwesomeIcon className='DeleteCommentButton' icon={faTrash} />
                      </button>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </>
    );

  if (loading) {
    return <ReactLoading className='LoadingSymbol' type='spinningBubbles' color='#ffffff' />;
  }

  return (
    <>
      <select value={sortBy} className='form-select' onChange={(e) => setSortBy(e.target.value)}>
        <option value='created_at'>Date</option>
        <option value='comment_count'>Comment Count</option>
        <option value='votes'>Votes</option>
      </select>
      <select
        value={sortOrder}
        className='form-select'
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value='DESC'>Descending</option>
        <option value='ASC'>Ascending</option>
      </select>
      <div className='Articles'>
        {articles.map((article) => (
          <Tilt key={article.article_id}>
            <Link className='ArticleLink' to={`/articles/${article.article_id}`}>
              <div className='Article'>
                <h3 className='ArticleTitle'>
                  {article.title} <span className='ArticleAuthor'>— {article.author}</span>
                </h3>
                <p>
                  <FontAwesomeIcon icon={faMessage} /> {article.comment_count}
                  {' — '}
                  <FontAwesomeIcon icon={faThumbsUp} /> {article.votes}
                </p>
              </div>
            </Link>
          </Tilt>
        ))}
      </div>
    </>
  );
}
