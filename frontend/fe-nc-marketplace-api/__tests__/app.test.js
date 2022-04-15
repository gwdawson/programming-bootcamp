const request = require('supertest');
const app = require('../app');
const db = require('../db/connection');

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  db.destroy();
});

describe('GET /api/categories', () => {
  it('200 - responds with an array of categories', async () => {
    const { body } = await request(app).get('/api/categories').expect(200);
    expect(body.categories).toBeArray();
    expect(body.categories.length).toBe(3);
    body.categories.forEach((category) => {
      expect(category).toEqual(
        expect.objectContaining({
          category_name: expect.any(String),
        })
      );
    });
  });
});

describe('POST /api/categories', () => {
  it('201 - responds with the created category', async () => {
    const { body } = await request(app)
      .post('/api/categories')
      .send({ category_name: 'Antiques' })
      .expect(201);

    expect(body.category).toEqual(
      expect.objectContaining({
        category_name: 'Antiques',
      })
    );
  });
  it('400 - when missing required keys', async () => {
    const { body } = await request(app)
      .post('/api/categories')
      .send({})
      .expect(400);
    expect(body.msg).toBe('category_name is a required field');
  });
});

describe('GET /api/users', () => {
  it('GET 200 - responds with an array of users', async () => {
    const { body } = await request(app).get('/api/users').expect(200);
    expect(body.users).toBeArray();
    expect(body.users.length).toBe(3);
    body.users.forEach((user) => {
      expect(user).toEqual(
        expect.objectContaining({
          username: expect.any(String),
          avatar_url: expect.any(String),
        })
      );
    });
  });
});

describe('POST /api/users', () => {
  it('201 - responds with the created user', async () => {
    const { body } = await request(app)
      .post('/api/users')
      .send({ username: 'Doug', avatar_url: 'https://test.com/doug.jpg' })
      .expect(201);
    expect(body.user).toEqual(
      expect.objectContaining({
        username: 'Doug',
        avatar_url: 'https://test.com/doug.jpg',
      })
    );
  });
  it('400 - for missing keys', async () => {
    const { body } = await request(app)
      .post('/api/users')
      .send({ avatar_url: 'https://test.com/doug.jpg' })
      .expect(400);

    expect(body.msg).toBe('username is a required field');
  });
  it('400 - for invalid keys', async () => {
    const { body } = await request(app)
      .post('/api/users')
      .send({ username: 'Doug'.repeat(100) })
      .expect(400);

    expect(body.msg).toBe('username must be at most 255 characters');
  });
  it('400 - for additional keys', async () => {
    const { body } = await request(app)
      .post('/api/users')
      .send({
        username: 'Doug',
        avatar_url: 'https://test.com/doug.jpg',
        extra: true,
      })
      .expect(400);

    expect(body.msg).toBe('Unexpected additional key: extra');
  });
  it('400 - for duplicate username', async () => {
    const { body } = await request(app)
      .post('/api/users')
      .send({
        username: 'Ant',
        avatar_url: 'https://test.com/ant.jpg',
      })
      .expect(400);

    expect(body.msg).toBe('Username already in use');
  });
});

describe('GET /api/users/:username', () => {
  it('200 - responds with the requested user', async () => {
    const { body } = await request(app).get('/api/users/Paul-R').expect(200);
    expect(body.user).toEqual(
      expect.objectContaining({
        username: 'Paul-R',
        avatar_url:
          'https://images.prismic.io/northcoders/5ffa1ae0-0e83-47aa-a5f2-d4b6ef24af5a_Paul+R.jpg',
        kudos: 0,
      })
    );
  });
  it('200 - responds with the number of items in the users basket', async () => {
    const { body } = await request(app).get('/api/users/Paul-R').expect(200);
    expect(body.user).toEqual(
      expect.objectContaining({
        items_in_basket: 2,
      })
    );
  });
  it('200 - responds with the number of items the user has ordered', async () => {
    const { body } = await request(app).get('/api/users/Paul-R').expect(200);
    expect(body.user).toEqual(
      expect.objectContaining({
        items_ordered: 1,
      })
    );
  });
  it('200 - responds with 0 if the user has no orders or items in their basket', async () => {
    const { body } = await request(app).get('/api/users/Ant').expect(200);
    expect(body.user).toEqual(
      expect.objectContaining({
        items_ordered: 0,
        items_in_basket: 0,
      })
    );
  });
  it('404 - when the requested username does not exist', async () => {
    const { body } = await request(app)
      .get('/api/users/not-a-user')
      .expect(404);
    expect(body.msg).toEqual('username not found');
  });
});

describe('PATCH /api/users/:username', () => {
  it('200 - responds with the updated user', async () => {
    const { body } = await request(app)
      .patch('/api/users/Paul-R')
      .send({
        avatar_url: 'newUrl',
        kudos_inc: 1,
      })
      .expect(200);
    expect(body.user).toEqual(
      expect.objectContaining({
        username: 'Paul-R',
        avatar_url: 'newUrl',
        kudos: 1,
        items_in_basket: 2,
        items_ordered: 1,
      })
    );
  });
  it('200 - updated usernames are cascaded', async () => {
    const { body } = await request(app)
      .patch('/api/users/Paul-R')
      .send({
        username: 'Paul-the-third',
      })
      .expect(200);
    expect(body.user).toEqual(
      expect.objectContaining({
        username: 'Paul-the-third',
        avatar_url:
          'https://images.prismic.io/northcoders/5ffa1ae0-0e83-47aa-a5f2-d4b6ef24af5a_Paul+R.jpg',
        kudos: 0,
        items_in_basket: 2,
        items_ordered: 1,
      })
    );
  });
  it('400 - invalid body', async () => {
    const { body } = await request(app)
      .patch('/api/users/Paul-R')
      .send({
        kudos_inc: 1.5,
      })
      .expect(400);
    expect(body.msg).toBe('kudos_inc must be an integer');
  });
  it('400 - usernames cannot have spaces', async () => {
    const { body } = await request(app)
      .patch('/api/users/Paul-R')
      .send({
        username: 'Paul R',
      })
      .expect(400);
    expect(body.msg).toBe('usernames cannot contain spaces');
  });
});

describe('GET /api/items', () => {
  it('200 - responds with all items', async () => {
    const { body } = await request(app).get('/api/items').expect(200);

    expect(body.items).toBeArray();
    expect(body.items.length).toBe(8);

    body.items.forEach((item) => {
      expect(item).toEqual(
        expect.objectContaining({
          item_name: expect.any(String),
          description: expect.any(String),
          img_url: expect.any(String),
          price: expect.any(Number),
          category_name: expect.any(String),
        })
      );
    });
  });
  it('200 - responds with a total item count', async () => {
    const { body } = await request(app).get('/api/items').expect(200);
    expect(body.total_items).toBe(8);
  });
  it('200 - items are sorted by item name by default', async () => {
    const { body } = await request(app).get('/api/items').expect(200);
    expect(body.items).toBeSortedBy('item_name');
  });
  it('200 - items are sorted by a passed column and order', async () => {
    const { body } = await request(app)
      .get('/api/items?sort_by=price&order=desc')
      .expect(200);
    expect(body.items).toBeSortedBy('price', { descending: true });
  });
  it('200 - items are filtered by the search query', async () => {
    const { body } = await request(app)
      .get('/api/items?search=holy grail')
      .expect(200);
    const itemNames = body.items.map((item) => item.item_name);
    expect(itemNames).toIncludeAllMembers(['The Holy Grail']);
  });
  it('400 - for invalid sort_by', async () => {
    const { body } = await request(app)
      .get('/api/items?sort_by=invalid')
      .expect(400);
    expect(body.msg).toBe(
      'sort_by must be one of the following values: item_id, item_name, price, category_name'
    );
  });
  it('400 - for invalid order', async () => {
    const { body } = await request(app)
      .get('/api/items?order=invalid')
      .expect(400);
    expect(body.msg).toBe(
      'order must be one of the following values: asc, desc'
    );
  });
  it('200 - items can be filtered by category_name', async () => {
    const { body } = await request(app)
      .get('/api/items?category_name=Electronics')
      .expect(200);
    body.items.forEach((item) => {
      expect(item.category_name).toBe('Electronics');
    });
  });
  it('404 - for a non-existent category_name', async () => {
    const { body } = await request(app)
      .get('/api/items?category_name=Missing')
      .expect(404);
    expect(body.msg).toBe('category not found');
  });
  it('200 - paginated results show a total item_count', async () => {
    const { body } = await request(app)
      .get('/api/items?sort_by=item_id&limit=2&p=2')
      .expect(200);
    expect(body.total_items).toBe(8);
  });
  it('200 - results can be paginated with a limit and p query', async () => {
    const { body } = await request(app)
      .get('/api/items?sort_by=item_id&limit=2&p=2')
      .expect(200);
    expect(body.items.length).toBe(2);
    const [item3, item4] = body.items;
    expect(item3.item_id).toBe(3);
    expect(item4.item_id).toBe(4);
  });
  it('400 - if both limit and p are not passed', async () => {
    const { body } = await request(app)
      .get('/api/items?sort_by=item_id&limit=2')
      .expect(400);
    expect(body.msg).toBe(
      'limit and p queries must be provided in conjunction'
    );
  });
  it('200 - items are priced above by the min_price query', async () => {
    const { body } = await request(app)
      .get('/api/items?min_price=2000')
      .expect(200);
    body.items.forEach((item) => {
      expect(item.price).toBeGreaterThan(2000);
    });
  });
  it('200 - items equal to the min_price are included', async () => {
    const { body } = await request(app)
      .get('/api/items?min_price=100000000')
      .expect(200);
    expect(body.items.length).toBe(1);
    body.items.forEach((item) => {
      expect(item.price).toBe(100000000);
    });
  });
  it('400 - for invalid min_price', async () => {
    const { body } = await request(app)
      .get('/api/items?min_price=1.5')
      .expect(400);
    expect(body.msg).toBe('min_price must be an integer');
  });
  it('200 - items are priced below the max_price query', async () => {
    const { body } = await request(app)
      .get('/api/items?max_price=3500')
      .expect(200);
    expect(body.items.length).toBe(5);
    body.items.forEach((item) => {
      expect(item.price).toBeLessThan(3500);
    });
  });
  it('200 - items equal to the max_price are included', async () => {
    const { body } = await request(app)
      .get('/api/items?max_price=1099')
      .expect(200);
    expect(body.items.length).toBe(1);
    body.items.forEach((item) => {
      expect(item.price).toBe(1099);
    });
  });
  it('400 - for invalid max_price', async () => {
    const { body } = await request(app)
      .get('/api/items?max_price=1.5')
      .expect(400);
    expect(body.msg).toBe('max_price must be an integer');
  });
});

describe('POST /api/items', () => {
  it('200 - responds with the new item', async () => {
    const { body } = await request(app)
      .post('/api/items')
      .send({
        item_name: 'Test item',
        description: 'testy mc test face',
        img_url: 'https://test.com/Test-item.jpg',
        price: 100,
        category_name: 'Relics',
      })
      .expect(201);
    expect(body.item).toEqual(
      expect.objectContaining({
        item_id: expect.any(Number),
        item_name: 'Test item',
        description: 'testy mc test face',
        img_url: 'https://test.com/Test-item.jpg',
        price: 100,
        category_name: 'Relics',
      })
    );
  });
  it('400 - invalid keys', async () => {
    const { body } = await request(app)
      .post('/api/items')
      .send({
        item_name: 'Test item',
        description: 'testy mc test face',
        img_url: 'https://test.com/Test-item.jpg',
        price: 'not a number',
        category_name: 'Relics',
      })
      .expect(400);
    expect(body.msg).toBe(
      'price must be a `number` type, but the final value was: `NaN` (cast from the value `"not a number"`).'
    );
  });
  it('400 - additional keys', async () => {
    const { body } = await request(app)
      .post('/api/items')
      .send({
        item_name: 'Test item',
        description: 'testy mc test face',
        img_url: 'https://test.com/Test-item.jpg',
        price: 100,
        category_name: 'Relics',
        extra: 'not allowed',
      })
      .expect(400);
    expect(body.msg).toBe('Unexpected additional key: extra');
  });
  it('404 - invalid category', async () => {
    const { body } = await request(app)
      .post('/api/items')
      .send({
        item_name: 'Test item',
        description: 'testy mc test face',
        img_url: 'https://test.com/Test-item.jpg',
        price: 100,
        category_name: 'Not a category',
      })
      .expect(404);
    expect(body.msg).toBe('category not found');
  });
  it('400 - price too large', async () => {
    const oneMoreThanMaxPostgresInt = 2147483648;
    const { body } = await request(app)
      .post('/api/items')
      .send({
        item_name: 'Test item',
        description: 'testy mc test face',
        img_url: 'https://test.com/Test-item.jpg',
        price: oneMoreThanMaxPostgresInt,
        category_name: 'Relics',
      })
      .expect(400);
    expect(body.msg).toBe('price must be less than 2147483648');
  });
});

describe('GET /api/items/:item_id', () => {
  it('200 - responds with the requested item', async () => {
    const { body } = await request(app).get('/api/items/1').expect(200);
    expect(body.item).toEqual(
      expect.objectContaining({
        item_id: 1,
        item_name: 'The Holy Grail',
        description: 'Defo the real deal and not a prop from Indiana Jones',
        img_url: expect.any(String),
        price: 5000,
        category_name: 'Relics',
      })
    );
  });
  it('404 - for a non-existent item_id', async () => {
    const { body } = await request(app).get('/api/items/1000').expect(404);
    expect(body.msg).toBe('item not found');
  });
  it('400 - for a non-integer item_id', async () => {
    const { body } = await request(app).get('/api/items/notAnInt').expect(400);
    expect(body.msg).toBe(
      'this must be a `number` type, but the final value was: `NaN` (cast from the value `"notAnInt"`).'
    );
  });
});

describe('DELETE /api/items/:item_id', () => {
  it('204 - responds with no content', async () => {
    await request(app).delete('/api/items/1').expect(204);
    const deletedItem = await db('items')
      .select('*')
      .where('item_id', 1)
      .first();
    expect(deletedItem).toBe(undefined);
  });
  it('204 - cascades to baskets and orders', async () => {
    await request(app).delete('/api/items/3').expect(204);
    await request(app).delete('/api/items/5').expect(204);
  });
  it('404 - for a non-existent item_id', async () => {
    const { body } = await request(app).delete('/api/items/1000').expect(404);
    expect(body.msg).toBe('item not found');
  });
  it('400 - for a non-integer item_id', async () => {
    const { body } = await request(app)
      .delete('/api/items/notAnInt')
      .expect(400);
    expect(body.msg).toBe(
      'this must be a `number` type, but the final value was: `NaN` (cast from the value `"notAnInt"`).'
    );
  });
});

describe('GET /api/users/:username/basket', () => {
  it('200 - responds with items in the users basket', async () => {
    const { body } = await request(app)
      .get('/api/users/Paul-R/basket')
      .expect(200);
    expect(body.items.length).toBe(2);
    body.items.forEach((item) => {
      expect(item).toEqual(
        expect.objectContaining({
          item_id: expect.any(Number),
          item_name: expect.any(String),
          description: expect.any(String),
          img_url: expect.any(String),
          price: expect.any(Number),
          category_name: expect.any(String),
        })
      );
    });
  });
  it('404 - when the username does not exist', async () => {
    const { body } = await request(app)
      .get('/api/users/not-a-user/basket')
      .expect(404);
    expect(body.msg).toBe('username not found');
  });
});

describe('POST /api/users/:username/basket', () => {
  it('201 - responds with added basket item', async () => {
    const { body } = await request(app)
      .post('/api/users/Paul-R/basket')
      .send({
        item_id: 1,
      })
      .expect(201);

    expect(body.item).toEqual(
      expect.objectContaining({
        item_id: 1,
        item_name: 'The Holy Grail',
        description: 'Defo the real deal and not a prop from Indiana Jones',
        img_url: expect.any(String),
        price: 5000,
        category_name: 'Relics',
      })
    );
  });
  it('404 - when the username does not exist', async () => {
    const { body } = await request(app)
      .post('/api/users/not-a-user/basket')
      .send({
        item_id: 1,
      })
      .expect(404);
    expect(body.msg).toBe('username not found');
  });
  it('404 - when the item_id does not exist', async () => {
    const { body } = await request(app)
      .post('/api/users/Paul-R/basket')
      .send({
        item_id: 1000,
      })
      .expect(404);
    expect(body.msg).toBe('item not found');
  });
  it('400 - missing item_id', async () => {
    const { body } = await request(app)
      .post('/api/users/Paul-R/basket')
      .send({})
      .expect(400);
    expect(body.msg).toBe('item_id is a required field');
  });
});

describe('DELETE /api/users/:username/basket/:item_id', () => {
  it('204 - responds with no content when the item is removed', async () => {
    await request(app).delete('/api/users/Paul-R/basket/3').expect(204);
    const itemInBasket = await db('baskets')
      .select('*')
      .where('item_id', 3)
      .first();
    expect(itemInBasket).toBe(undefined);
  });
  it('404 - for a non-existent username', async () => {
    const { body } = await request(app)
      .delete('/api/users/not-a-username/basket/3')
      .expect(404);
    expect(body.msg).toBe('username not found');
  });
  it('404 - for a non-existent item_id', async () => {
    const { body } = await request(app)
      .delete('/api/users/Paul-R/basket/10000')
      .expect(404);
    expect(body.msg).toBe('item not found');
  });
  it('404 - for a existing item not in the users basket', async () => {
    const { body } = await request(app)
      .delete('/api/users/Paul-R/basket/1')
      .expect(404);
    expect(body.msg).toBe('item not found in basket');
  });
});

describe('GET /api/users/:username/orders', () => {
  it('200 - responds with items the user has ordered', async () => {
    const { body } = await request(app)
      .get('/api/users/Paul-R/orders')
      .expect(200);
    expect(body.items.length).toBe(1);
    body.items.forEach((item) => {
      expect(item).toEqual(
        expect.objectContaining({
          item_id: expect.any(Number),
          item_name: expect.any(String),
          description: expect.any(String),
          img_url: expect.any(String),
          price: expect.any(Number),
          category_name: expect.any(String),
        })
      );
    });
  });
  it('404 - when the username does not exist', async () => {
    const { body } = await request(app)
      .get('/api/users/not-a-user/orders')
      .expect(404);
    expect(body.msg).toBe('username not found');
  });
});

describe('POST /api/users/:username/orders', () => {
  it('201 - responds with ordered item', async () => {
    const { body } = await request(app)
      .post('/api/users/Paul-R/orders')
      .send({
        item_id: 1,
      })
      .expect(201);

    expect(body.item).toEqual(
      expect.objectContaining({
        item_id: 1,
        item_name: 'The Holy Grail',
        description: 'Defo the real deal and not a prop from Indiana Jones',
        img_url: expect.any(String),
        price: 5000,
        category_name: 'Relics',
      })
    );
  });
  it('404 - when the username does not exist', async () => {
    const { body } = await request(app)
      .post('/api/users/not-a-user/orders')
      .send({
        item_id: 1,
      })
      .expect(404);
    expect(body.msg).toBe('username not found');
  });
  it('404 - when the item_id does not exist', async () => {
    const { body } = await request(app)
      .post('/api/users/Paul-R/orders')
      .send({
        item_id: 1000,
      })
      .expect(404);
    expect(body.msg).toBe('item not found');
  });
  it('400 - missing item_id', async () => {
    const { body } = await request(app)
      .post('/api/users/Paul-R/orders')
      .send({})
      .expect(400);
    expect(body.msg).toBe('item_id is a required field');
  });
});

describe('POST /api/reset', () => {
  it('200 - resets the db to the initial state', async () => {
    await request(app)
      .post('/api/users')
      .send({ username: 'Doug', avatar_url: 'https://test.com/doug.jpg' })
      .expect(201);
    await request(app).get('/api/users/Doug').expect(200);
    await request(app).post('/api/reset').expect(200);
    await request(app).get('/api/users/Doug').expect(404);
  });
});
