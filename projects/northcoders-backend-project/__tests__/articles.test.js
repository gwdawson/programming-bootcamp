const request = require('supertest');
const testData = require('../db/data/test-data/index');
const seed = require('../db/seeds/seed');
const db = require('../db/connection');
const app = require('../index.js');

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe('testing article endpoints', () => {
  test('should return an object including keys {author, title, article_id , body, topic, created_at, votes, comment_count}', async () => {
    const { body } = await request(app).get('/api/articles/1').expect(200);
    const { article } = body;
    expect(article).toEqual(
      expect.objectContaining({
        author: 'butter_bridge',
        title: 'Living in the shadow of a great man',
        article_id: 1,
        body: 'I find this existence challenging',
        topic: 'mitch',
        created_at: '2020-07-09T20:11:00.000Z',
        votes: 100,
        comment_count: 11,
      })
    );
  });
  describe('PATCH /api/articles/:article_id', () => {
    test('should return an the article with the updated vote count', async () => {
      const { body } = await request(app).patch('/api/articles/1').send({ inc_votes: 6 }).expect(200);
      const { article } = body;
      expect(article).toEqual(
        expect.objectContaining({
          author: 'butter_bridge',
          title: 'Living in the shadow of a great man',
          article_id: 1,
          body: 'I find this existence challenging',
          topic: 'mitch',
          created_at: '2020-07-09T20:11:00.000Z',
          votes: 106,
        })
      );
    });
  });
  describe('GET /api/articles', () => {
    test('should return an array of all articles', async () => {
      const { body } = await request(app).get('/api/articles').expect(200);
      const { articles } = body;
      expect(articles).toHaveLength(12);
    });
  });

  describe('POST /api/articles/:article_id/comments', () => {
    test('should return an object including keys {author, body, article_id, created_at, comment_id}', async () => {
      const { body } = await request(app)
        .post('/api/articles/1/comments')
        .send({ username: 'lurker', body: 'My username is lurker' })
        .expect(201);
      const { comment } = body;
      expect(comment).toEqual(
        expect.objectContaining({
          comment_id: 19,
          body: 'My username is lurker',
          article_id: 1,
          author: 'lurker',
          votes: 0,
          created_at: expect.any(String),
        })
      );
    });
    test('should return 400 when not given username and body keys', async () => {
      const { body } = await request(app).post('/api/articles/1/comments').send({ username: 'lurker' }).expect(400);
      expect(body).toEqual(expect.objectContaining({ message: 'POST request must include 2 keys [username, body]' }));
    });
    test('should return 400 when given an invalid username', async () => {
      const { body } = await request(app)
        .post('/api/articles/1/comments')
        .send({ username: 'lurkerr', body: 'My username is lurker' })
        .expect(400);
      expect(body).toEqual(expect.objectContaining({ message: 'bad request' }));
    });
    test('should return 400 when given an invalid article_id', async () => {
      const { body } = await request(app)
        .post('/api/articles/abc/comments')
        .send({ username: 'lurker', body: 'My username is lurker' })
        .expect(400);
      expect(body).toEqual(expect.objectContaining({ message: 'invalid article_id' }));
    });
    test('should return 404 for a nonexistant article id ', async () => {
      const { body } = await request(app)
        .post('/api/articles/100000/comments')
        .send({ username: 'lurker', body: 'this is my body' })
        .expect(400);
      expect(body).toEqual(expect.objectContaining({ message: 'bad request' }));
    });
  });

  describe('GET /api/articles?queries', () => {
    test('should return an array of all articles that match the sort_by', async () => {
      const { body } = await request(app).get('/api/articles?sort_by=votes').expect(200);
      const { articles } = body;
      expect(articles).toHaveLength(12);
      expect(articles[0]).toEqual({
        article_id: 1,
        title: 'Living in the shadow of a great man',
        topic: 'mitch',
        author: 'butter_bridge',
        body: 'I find this existence challenging',
        comment_count: '11',
        created_at: '2020-07-09T20:11:00.000Z',
        votes: 100,
      });
    });
    test('should return an array of all articles that match the sort_by', async () => {
      const { body } = await request(app).get('/api/articles?order=asc').expect(200);
      const { articles } = body;
      expect(articles).toHaveLength(12);
      expect(articles[0]).toEqual({
        article_id: 7,
        title: 'Z',
        topic: 'mitch',
        author: 'icellusedkars',
        body: 'I was hungry.',
        created_at: '2020-01-07T14:08:00.000Z',
        votes: 0,
        comment_count: '0',
      });
    });
    test('should return an array of all articles that match the topic', async () => {
      const { body } = await request(app).get('/api/articles?topic=cats').expect(200);
      const { articles } = body;
      expect(articles).toHaveLength(1);
      expect(articles[0]).toEqual({
        article_id: 5,
        title: 'UNCOVERED: catspiracy to bring down democracy',
        topic: 'cats',
        author: 'rogersop',
        body: 'Bastet walks amongst us, and the cats are taking arms!',
        comment_count: '2',
        created_at: '2020-08-03T13:14:00.000Z',
        votes: 0,
      });
    });
  });
  describe('GET /api/articles/:article_id/comments', () => {
    test('should return an array of all comments for the given article_id', async () => {
      const { body } = await request(app).get('/api/articles/9/comments').expect(200);
      const { comments } = body;
      expect(comments).toEqual([
        {
          comment_id: 1,
          body: "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
          votes: 16,
          author: 'butter_bridge',
          created_at: '2020-04-06T12:17:00.000Z',
        },
        {
          comment_id: 17,
          body: 'The owls are not what they seem.',
          votes: 20,
          author: 'icellusedkars',
          created_at: '2020-03-14T17:02:00.000Z',
        },
      ]);
    });
  });
});
