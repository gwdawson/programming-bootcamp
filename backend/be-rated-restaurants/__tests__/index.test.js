const app = require('../app');
const request = require('supertest');
const db = require('../db');

afterAll(() => db.end());

describe('GET /api', () => {
  test('returns a test message', () => {
    return request(app)
      .get('/api')
      .expect(200)
      .then((res) => {
        expect(res.body.message).toBe('all ok');
      });
  });
});

describe('GET /api/restaurants', () => {
  test('returns an object with an array of all restaurants including average rating', () => {
    return request(app)
      .get('/api/restaurants')
      .expect(200)
      .then((res) => {
        expect(res.body.restaurants).toBeInstanceOf(Array);
        res.body.restaurants.forEach((elem) => {
          expect(elem).toMatchObject({
            restaurant_id: expect.any(Number),
            restaurant_name: expect.any(String),
            area_id: expect.any(Number),
            cuisine: expect.any(String),
            website: expect.any(String),
            rating: expect.any(Number),
          });
        });
      });
  });
});

describe('POST /api/restaurants', () => {
  test('should add a restaurant to the database and return the restaurant', () => {
    const sending = {
      restaurant_name: 'The Codfather',
      area_id: 2,
      cuisine: 'British',
      website: 'www.thecodfather.com',
    };
    return request(app)
      .post('/api/restaurants')
      .send(sending)
      .expect(201)
      .then((res) => {
        expect(res.body.restaurant).toBeInstanceOf(Object);
        expect(res.body.restaurant).not.toBeInstanceOf(Array);
        expect(res.body.restaurant).toEqual({
          restaurant_id: 9,
          ...sending,
        });
      });
  });
  test('should respond with 400 bad request if give bad request ', () => {
    const sending = {
      restaurant_name: 1234567890,
      area_id: 2,
      cuisine: 'British',
      website: 'www.thecodfather.com',
    };
    return request(app)
      .post('/api/restaurants')
      .send(sending)
      .expect(400)
      .then((res) => {
        expect(res.body).toEqual({ error: 'bad request' });
      });
  });
  test('should respond with 400 bad request if give bad request 2.0', () => {
    const sending = {
      not_restaurant_name: 'The Codfather',
      area_id: 2,
      cuisine: 'British',
      website: 'www.thecodfather.com',
    };
    return request(app)
      .post('/api/restaurants')
      .send(sending)
      .expect(400)
      .then((res) => {
        expect(res.body).toEqual({ error: 'bad request' });
      });
  });
});

describe('DELETE /api/restaurants/:restaurant_id', () => {
  test('deletes the restaurant of given id', () => {
    return request(app)
      .delete('/api/restaurants/9')
      .expect(204)
      .then((res) => {
        db.query('SELECT * FROM restaurants').then((data) => {
          expect(data.rows.length).toBe(8);
          data.rows.forEach((elem) => {
            expect(elem).not.toMatchObject({
              retaurant_id: 9,
              restaurant_name: 'The Codfather',
              area_id: 2,
              cuisine: 'British',
              website: 'www.thecodfather.com',
            });
          });
        });
      });
  });
});

describe('PATCH /api/restaurants/:restaurant_id', () => {
  test('updates the area id of a restaurant given a restaurant id', () => {
    const sending = {
      area_id: 2,
    };
    return request(app)
      .patch('/api/restaurants/1')
      .send(sending)
      .expect(201)
      .then((res) => {
        expect(res.body.restaurant).toEqual({
          restaurant_id: 1,
          restaurant_name: 'Luck Lust Liquor & Burn',
          area_id: 2,
          cuisine: 'Mexican',
          website: 'http://lucklustliquorburn.com/',
        });
      });
  });

  test('returns error 400 when an empty object is passed', () => {
    const sending = {};
    return request(app).patch('/api/restaurants/1').send(sending).expect(400);
  });
});

describe('GET /api/areas/:area_id/restaurants', () => {
  test('should return an object with area details', () => {
    return request(app)
      .get('/api/areas/1/restaurants')
      .expect(200)
      .then((response) => {
        expect(response.body.area).toEqual({
          area_id: 1,
          name: 'Northern Quarter',
          total_restaurants: 3,
          restaurants: [
            {
              restaurant_id: 4,
              restaurant_name: 'This & That',
              area_id: 1,
              cuisine: 'Family Run Indian Curryhouse',
              website: 'http://www.thisandthatcafe.co.uk/',
            },
            {
              restaurant_id: 5,
              restaurant_name: 'Pieminister',
              area_id: 1,
              cuisine: 'Pies and More Pies',
              website: '',
            },
            {
              restaurant_id: 7,
              restaurant_name: 'Delhi 2 go',
              area_id: 1,
              cuisine: 'Late night food',
              website: 'http://delhi2go-online.co.uk/',
            },
          ],
        });
      });
  });
});
