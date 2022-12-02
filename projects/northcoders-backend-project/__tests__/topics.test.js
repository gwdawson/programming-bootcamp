const request = require('supertest');
const testData = require('../db/data/test-data/index');
const seed = require('../db/seeds/seed');
const db = require('../db/connection');
const app = require('../index.js');

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe('/api/topics', () => {
  test('should give a status of 200', async () => {
    const { body } = await request(app).get('/api/topics').expect(200);
    expect(Array.isArray(body.topics)).toBe(true);
  });
});
