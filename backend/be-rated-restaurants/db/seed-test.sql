DROP DATABASE IF EXISTS rated_restaurants_test;
CREATE DATABASE rated_restaurants_test;

\c rated_restaurants_test;

CREATE TABLE areas (
    area_id SERIAL PRIMARY KEY,
    area_name VARCHAR(40) NOT NULL
);

CREATE TABLE restaurants (
    restaurant_id SERIAL PRIMARY KEY,
    restaurant_name VARCHAR(40) NOT NULL,
    area_id INT REFERENCES areas(area_id),
    cuisine VARCHAR(40),
    website VARCHAR(40)
);

CREATE TABLE ratings (
    rating_id SERIAL PRIMARY KEY,
    restaurant_id INT,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id) ON DELETE CASCADE,
    rating INT CHECK (rating >= 1 AND rating <= 5)
);

INSERT INTO areas
    (area_name)
VALUES
    ('Northern Quarter'),
    ('Spinningfields'),
    ('Ancoats');

INSERT INTO restaurants
  (restaurant_name, area_id, cuisine, website)
VALUES
  ('Luck Lust Liquor & Burn', 1, 'Mexican', 'http://lucklustliquorburn.com/'),
  ('The Oast House', 2, 'Gastropub and Grill', 'http://theoasthouse.uk.com/'),
  ('Rudys Pizza', 3, 'Neapolitan Pizzeria', 'http://rudyspizza.co.uk/'),
  ('This & That', 1, 'Family Run Indian Curryhouse', 'http://www.thisandthatcafe.co.uk/'),
  ('Pieminister', 1, 'Pies and More Pies', ''),
  ('Australasia', 2, 'Australasian Cuisine', 'http://australasia.uk.com/'),
  ('Delhi 2 go', 1, 'Late night food', 'http://delhi2go-online.co.uk/'),
  ('Vivid Lounge', 3, 'Chic Thai Eatery', 'http://www.vividlounge.uk/');

INSERT INTO ratings
  (restaurant_id, rating)
VALUES
  (1, 5),
  (2, 4),
  (3, 5),
  (4, 4),
  (5, 1),
  (6, 4),
  (7, 5),
  (8, 4),
  (1, 2),
  (2, 4),
  (2, 5),
  (4, 4),
  (7, 5),
  (8, 4),
  (1, 2);
