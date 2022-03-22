\c my_bookshop

\echo '\n Here is the total number of books we have by each author:\n'
SELECT author_name, COUNT(author_name) FROM authors JOIN books ON authors.id = books.id GROUP BY author_name;

\echo '\n Here is the average price for dystopian books:\n'
SELECT AVG(price_in_pence) AS average_dystopian_price FROM authors
JOIN books ON authors.id = books.id
JOIN books_genre ON books.id = books_genre.book_id
JOIN genre ON books_genre.genre_id = genre.genre_id WHERE genre = 'dystopian';
