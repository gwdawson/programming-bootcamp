DROP DATABASE IF EXISTS theme_parks;
CREATE DATABASE theme_parks;

\c theme_parks;

CREATE TABLE parks (
  park_id SERIAL PRIMARY KEY,
  park_name VARCHAR NOT NULL,
  year_opened INT NOT NULL,
  annual_attendance INT NOT NULL
);

CREATE TABLE ride_categories (
  ride_category_id SERIAL PRIMARY KEY,
  category_name VARCHAR NOT NULL
);

CREATE TABLE rides (
  ride_id SERIAL PRIMARY KEY,
  ride_name VARCHAR NOT NULL,
  year_opened INT NOT NULL,
  votes INT DEFAULT 0,
  park_id INT REFERENCES parks(park_id) ON DELETE CASCADE,
  category_id INT REFERENCES ride_categories(ride_category_id) ON DELETE CASCADE
);

CREATE TABLE stall_categories (
  stall_category_id SERIAL PRIMARY KEY,
  category_name VARCHAR NOT NULL
);

CREATE TABLE stalls (
  stall_id SERIAL PRIMARY KEY,
  stall_name VARCHAR NOT NULL,
  park_id INT NOT NULL REFERENCES parks(park_id) ON DELETE CASCADE,
  category_id INT NOT NULL REFERENCES stall_categories(stall_category_id) ON DELETE CASCADE
);

INSERT INTO parks
  (park_name, year_opened, annual_attendance)
VALUES
  ('Thorpe Park', 1979, 1700000),
  ('Alton Towers', 1980, 2520000),
  ('Chessington World of Adventures', 1987, 1400000),
  ('Tivoli Gardens', 1843, 3972000);

INSERT INTO ride_categories
  (category_name)
VALUES
  ('Rollercoaster'),
  ('Water ride'),
  ('Thrill ride'),
  ('Gentle ride');

INSERT INTO stall_categories
  (category_name)
VALUES
  ('Gift shop'),
  ('Burger stall'),
  ('Hotdog stall'),
  ('Information stand'),
  ('Ice cream van');

INSERT INTO rides
  (ride_name, year_opened, park_id, category_id, votes)
VALUES
  ('Colossus', 2002, 1, 1, 5),
  ('Stealth', 2006, 1, 1, 4),
  ('Loggers Leap', 1989, 1, 2, 9),
  ('Mr Monkeys Banana Ride', 1994, 1, 3, 5),
  ('Tidal Wave', 2000, 1, 3, 1),
  ('Rocky Express', 1989, 1, 4, 5),
  ('Nemesis', 1994, 2, 1, 5),
  ('The Smiler', 2013, 2, 1, 1),
  ('Rita', 2005, 2, 1, 5),
  ('Congo River Rapids', 1994, 2, 2, 3),
  ('Enterprise', 1984, 2, 3, 5),
  ('Gallopers Carousel', 1991, 2, 4, 7),
  ('Rattlesnake', 1998, 3, 1, 11),
  ('Tiger Rock', 2018, 3, 2, 3),
  ('KOBRA', 2010, 3, 3, 1),
  ('Tiny Truckers', 1994, 3, 4, 2),
  ('The Demon', 2004, 4, 1, 8),
  ('The Caravan', 1974, 4, 1, 1),
  ('The Bumper Cars', 1926, 4, 3, 25),
  ('The Little Pilot', 1990, 4, 4, 6);

INSERT INTO stalls
  (stall_name, park_id, category_id)
VALUES
  ('Thorpe gifts', 1, 1),
  ('Thorpe burgers', 1, 2),
  ('Thorpe dogs', 1, 3),
  ('Thorpe info', 1, 4),
  ('Thorpe info 2', 1, 4),
  ('Thorpe ice', 1, 5),
  ('Tower gifts', 2, 1),
  ('Tower gifts 2', 2, 1),
  ('Towering Burgers', 2, 2),
  ('Information Tower', 2, 4),
  ('Info for days', 3, 1),
  ('Info for weeks', 3, 1),
  ('More burgers', 3, 2),
  ('Even more hotdogs', 3, 3),
  ('Ice creamz', 3, 5),
  ('Tiv-info', 4, 1),
  ('Sloppy Tivolis', 4, 2),
  ('Tiv-dogs', 4, 3),
  ('T-info', 4, 4);
