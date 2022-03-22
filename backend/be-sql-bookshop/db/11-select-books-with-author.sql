\c my_bookshop

\echo '\n Here is a list of book titles with the corresponding author:\n'
SELECT title, author_name FROM books JOIN authors ON book_author_id = authors.id;

\echo '\n Here is a list of authors without an associated book:\n'
SELECT authors.author_name FROM books RIGHT JOIN authors ON book_author_id = authors.id WHERE books.title IS NULL;
