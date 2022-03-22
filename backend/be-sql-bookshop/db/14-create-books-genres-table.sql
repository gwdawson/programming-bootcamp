\c my_bookshop

CREATE TABLE books_genre (
  book_genre_id SERIAL PRIMARY KEY,
  book_id INT REFERENCES books(id),
  genre_id INT REFERENCES genre(genre_id)
);
