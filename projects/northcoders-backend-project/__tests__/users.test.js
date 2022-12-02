const request = require('supertest');
const testData = require('../db/data/test-data/index');
const seed = require('../db/seeds/seed');
const db = require('../db/connection');
const app = require('../index.js');

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe('testing users endpoints', () => {
  test('should return an array of all users usernames', async () => {
    const res = await request(app).get('/api/users').expect(200);
    expect(res.body.users).toEqual(
      expect.arrayContaining([
        { username: 'butter_bridge' },
        { username: 'icellusedkars' },
        { username: 'rogersop' },
        { username: 'lurker' },
      ])
    );
  });
});
