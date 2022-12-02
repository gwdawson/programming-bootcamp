const request = require('supertest');
const testData = require('../db/data/test-data/index');
const seed = require('../db/seeds/seed');
const db = require('../db/connection');
const app = require('../index.js');

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe('testing DELETE/api/comments/comment_id', () => {
  test('should return a status 204 and no content', async () => {
    await request(app).delete('/api/comments/1').expect(204);
  });
  test('should return 400 given bad request', async () => {
    await request(app).delete('/api/comments/a').expect(400);
  });
});
