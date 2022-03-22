\c my_bookshop;

-- create the books table here

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT,
  price_in_pence INTEGER,
  quantity_in_stock INTEGER,
  release_date DATE,
  is_fiction BOOLEAN
);
