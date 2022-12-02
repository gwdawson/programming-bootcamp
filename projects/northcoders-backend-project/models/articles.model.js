const db = require('../db/connection');

exports.fetchArticleById = async (article_id) => {
  const { rows } = await db.query('SELECT * FROM articles WHERE article_id = $1;', [article_id]);
  const comments = await db.query('SELECT * FROM comments WHERE article_id = $1;', [article_id]);
  rows[0]['comment_count'] = comments.rows.length;
  return rows[0];
};

exports.updateArticleById = async (article_id, inc_votes) => {
  const { rows } = await db.query('UPDATE articles SET votes = votes + $1 WHERE article_id = $2 RETURNING *', [
    inc_votes,
    article_id,
  ]);
  return rows[0];
};

exports.fetchArticles = async (sort_by = 'created_at', order = 'DESC', topic = undefined) => {
  const params = [];

  const allowedColums = ['article_id', 'title', 'topic', 'author', 'body', 'comment_count', 'created_at', 'votes'];
  if (!allowedColums.includes(sort_by))
    return Promise.reject({
      status: 400,
      message: 'Invalid sort_by',
    });

  const allowedOrderBy = ['ASC', 'asc', 'DESC', 'desc'];
  if (!allowedOrderBy.includes(order))
    return Promise.reject({
      status: 400,
      message: 'Invalid sort_by',
    });

  let query = `
  SELECT articles.*, COUNT(comments.comment_id) AS comment_count
  FROM articles LEFT JOIN comments
  ON articles.article_id = comments.article_id`;

  if (topic) {
    query += ` WHERE topic = $1 `;
  }

  query += `
  GROUP BY articles.article_id
  ORDER BY ${sort_by} ${order}`;

  if (topic) params.push(topic);

  const { rows } = await db.query(query, params);
  return rows;
};

exports.insertCommentByArticleId = async (article_id, username, body) => {
  const { rows } = await db.query('INSERT INTO comments (article_id, author, body) VALUES ($1, $2, $3) RETURNING *', [
    article_id,
    username,
    body,
  ]);
  return rows[0];
};

exports.fetchCommentsByArticleId = async (article_id) => {
  const { rows } = await db.query(
    'SELECT comment_id, votes, created_at, author, body FROM comments WHERE article_id = $1;',
    [article_id]
  );
  return rows;
};
