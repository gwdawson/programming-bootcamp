\c my_bookshop

\echo '\n Here are the genres for Emma:\n'
SELECT genre FROM books_genre JOIN books ON book_id = id JOIN genre ON books_genre.genre_id = genre.genre_id WHERE title = 'Emma';

\echo '\n Here are all the dystopian books:\n'
SELECT title FROM books_genre JOIN books ON book_id = id JOIN genre ON books_genre.genre_id = genre.genre_id WHERE genre = 'dystopian';
