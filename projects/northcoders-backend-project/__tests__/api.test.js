const request = require('supertest');
const testData = require('../db/data/test-data/index');
const seed = require('../db/seeds/seed');
const db = require('../db/connection');
const app = require('../index.js');

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe('testing GET /api endpoint', () => {
  test('should return an object listing all available endpoints', async () => {
    const { body } = await request(app).get('/api').expect(200);
    expect(body).toEqual({
      endpoints: {
        'GET /api': {
          description: 'serves up a json representation of all the available endpoints of the api',
        },
        'GET /api/topics': {
          description: 'serves an array of all topics',
          queries: [],
          exampleResponse: {
            topics: [{ slug: 'football', description: 'Footie!' }],
          },
        },
        'GET /api/users': {
          description: 'serves an array of all users',
          queries: [],
          exampleResponse: {
            users: [{ username: 'weegembump' }],
          },
        },
        'GET /api/articles': {
          description: 'serves an array of all topics',
          queries: ['author', 'topic', 'sort_by', 'order'],
          exampleResponse: {
            articles: [
              {
                title: 'Seafood substitutions are increasing',
                topic: 'cooking',
                author: 'weegembump',
                body: 'Text from the article..',
                created_at: 1527695953341,
              },
            ],
          },
        },
        'GET /api/articles/:article_id': {
          description: 'serves an article by its id',
          queries: [],
          exampleResponse: {
            article: {
              author: 'butter_bridge',
              title: 'Living in the shadow of a great man',
              article_id: 1,
              body: 'I find this existence challenging',
              topic: 'mitch',
              created_at: '2020-07-09T20:11:00.000Z',
              votes: 100,
              comment_count: 11,
            },
          },
        },
        'PATCH /api/articles/:article_id': {
          description: 'updates an article by its id',
          queries: [],
          'request-body': { inc_votes: 6 },
          exampleResponse: {
            article: {
              author: 'butter_bridge',
              title: 'Living in the shadow of a great man',
              article_id: 1,
              body: 'I find this existence challenging',
              topic: 'mitch',
              created_at: '2020-07-09T20:11:00.000Z',
              votes: 106,
            },
          },
        },
        'GET /api/articles/:article_id/comments': {
          description: 'serves an array of all comments for a specific article',
          queries: [],
          exampleResponse: {
            comments: [
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
            ],
          },
        },
        'POST /api/articles/:article_id/comments': {
          description: 'serves an array of all comments for a specific article',
          queries: [],
          'request-body': { username: 'lurker', body: 'My username is lurker' },
          exampleResponse: {
            comment: {
              comment_id: 19,
              body: 'My username is lurker',
              article_id: 1,
              author: 'lurker',
              votes: 0,
              created_at: '2020-03-14T17:02:00.000Z',
            },
          },
        },
        'DELETE /api/comments/:comment_id': {
          description: 'deletes a comment by its id',
          queries: [],
          exampleResponse: {},
        },
      },
    });
  });
});
