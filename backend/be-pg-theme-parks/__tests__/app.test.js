const request = require('supertest');
const app = require('../app');
const database = require('../db');

afterAll(() => {
  if (database.end) database.end();
});

describe('1. GET /api/parks', () => {
  test('status:200, responds with an array of park objects', () => {
    return request(app)
      .get('/api/parks')
      .expect(200)
      .then(({ body }) => {
        const { parks } = body;
        expect(parks).toBeInstanceOf(Array);
        expect(parks).toHaveLength(4);
        parks.forEach((park) => {
          expect(park).toEqual(
            expect.objectContaining({
              park_id: expect.any(Number),
              park_name: expect.any(String),
              year_opened: expect.any(Number),
              annual_attendance: expect.any(Number),
            })
          );
        });
      });
  });
});

describe('2. GET /api/parks/:park_id', () => {
  test('status:200, responds with a single matching park', () => {
    const PARK_ID = 2;
    return request(app)
      .get(`/api/parks/${PARK_ID}`)
      .expect(200)
      .then(({ body }) => {
        expect(body.park).toEqual({
          park_id: PARK_ID,
          park_name: 'Alton Towers',
          year_opened: 1980,
          annual_attendance: 2520000,
        });
      });
  });
});

describe('3. POST /api/parks', () => {
  test('status:201, responds with park newly added to the database', () => {
    const newPark = {
      park_name: 'Dismaland',
      year_opened: 2015,
      annual_attendance: 150000,
    };
    return request(app)
      .post('/api/parks')
      .send(newPark)
      .expect(201)
      .then(({ body }) => {
        expect(body.park).toEqual({
          park_id: 5,
          ...newPark,
        });
      });
  });
});

describe('4. DELETE /parks/:id', () => {
  test('status:204, responds with an empty response body', () => {
    return request(app).delete('/api/parks/2').expect(204);
  });
});

describe('5. PATCH /api/parks/:park_id', () => {
  it('status:200, responds with the updated park', () => {
    const parkUpdates = {
      park_name: 'Chessington Earth of Experiences',
      annual_attendance: 0,
    };
    return request(app)
      .patch('/api/parks/3')
      .send(parkUpdates)
      .expect(200)
      .then(({ body }) => {
        expect(body.park).toEqual({
          park_id: 3,
          year_opened: 1987,
          ...parkUpdates,
        });
      });
  });
});
