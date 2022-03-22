# SQL Book Shop

You have been tasked with modernising your local bookshop's inventory records! 📚

## Section 1

### 1. Create a new database for the bookshop

In `db/01-create-database.sql`, create a new database called `my_bookshop`.

Make sure that you can run the file multiple times without errors (`psql -f db/01-create-database.sql`).

Each of the subsequent tasks have their own file in the `./db` directory:

### 2. Create a books table

You will need a place to keep a record of all the books that are in stock. Each book will need the following:

- unique identifier
- title
- price_in_pence
- quantity_in_stock
- release_date
- is_fiction

### 3. Insert book data into the books table

Now that you have somewhere to store the information about the books, it's time to populate the table!

Here is some sample data for you to get started with.

> Hint: you'll have to research how to escape apostrophes that are mid-string for this one!

| book_id | title                                | price_in_pence | quantity_in_stock | release_date | is_fiction |
| ------: | ------------------------------------ | -------------: | ----------------: | ------------ | ---------- |
|       1 | The Hitchhiker's Guide to the Galaxy |            899 |               560 | 1997-10-12   | true       |
|       2 | The Little Prince                    |            699 |              1020 | 1943-04-06   | true       |
|       3 | The Tale of Peter Rabbit             |            599 |              1000 | 1902-10-01   | true       |
|       4 | Emma                                 |            522 |               390 | 1815-12-23   | true       |
|       5 | Nineteen Eighty-Four: A Novel        |            799 |               420 | 1949-06-08   | true       |
|       6 | The Handmaid's Tale                  |            899 |                10 | 1985-08-01   | true       |
|       7 | The War of the Worlds                |            250 |                17 | 1897-04-01   | true       |
|       8 | Captain Corelli's Mandolin           |            999 |                 0 | 1995-08-29   | true       |
|       9 | A Brief History of Time              |            825 |                 0 | 1988-04-01   | false      |
|      10 | Pride and Prejudice                  |            699 |                 4 | 1813-01-28   | true       |

Feel free to add some of your favourite books too!

### 4. Query the books table

Make some queries to find out some information about the books you have.

Write a query to list each of the following:

- the books that we have in stock
- the non-fiction books
- the books released in the 1900s
- the books with "the" in the title
- all of the books sorted in alphabetical order
- the most expensive book

### 5. Delete some books

There are a few books that have been added to the table that are not in stock. Delete them with a single `DELETE` query (not by altering the data added in task 2)!

_**If you want to run the deletions multiple times to test them out, the data will need to be reset. We've added a bash script that will run all of the `*.sql` files in the `./db` folder. Try running the command `./run-all.sh` from your terminal in the root of this repository. This will save the output of each `*.sql` file in the `./db` directory to a `*.txt` file of the same name.**_

### 6. Update some books

We have a lot of copies of certain books in stock. Time for a sale! For any books that we have more than ten of, reduce the price by 10%.

> If you've reached this point on Day 1 🏆 nice work! You have earned yourself a tea break.
> Next, you can have a look through the notes for the next lecture and then challenge yourself by starting the Section 2 tasks.

## Section 2

The bookshop owner is very happy with your work so far! 🤓 Because it's going so well, they have a few more requirements for you!

### 7. Create an authors table

As it stands, the database isn't storing any information about the book's authors.

We need to add this information to the database without duplicating any information.

Each author will need a unique identifier, an author name and, as the owner is a big fan of trivia, a place to store a fun fact about the author.

For our purposes, let's assume that books are written by a single person.

### 8. Insert some author data

Here is a list of some of the authors stocked by our bookshop (each accompanied by fun fact 🤔). Make sure this data is inserted carefully into the authors table.

Dan Brown

> Favourite colour is not brown

Antoine de Saint-Exupéry

> He was a successful commercial pilot before World War II, working airmail routes in Europe, Africa, and South America.

Douglas Adams

> He made two appearances in Monty Python's Flying Circus

Stephen Hawking

> Doctors told him he wouldn't live past his early 20s

Eric Carle

> When he was a young boy, Carle had a dream that he would build a bridge from Germany to America.

J. D. Salinger

> The Catcher in the Rye was the only novel that J.D. Salinger published during his lifetime, not bad for a first try!

Beatrix Potter

> Between 1881 and 1897 Potter kept a journal in which she jotted down her private thoughts in a secret code . This code was so fiendishly difficult it was not cracked and translated until 1958.

C. S. Lewis

> Lewis set up a charitable trust to give away whatever money he received from his books.

Roald Dahl

> During World War II he passed intelligence to MI6 from Washington.

Frank Herbert

> While conversing with fungi expert Paul Stamets, Herbert revealed that the world of Dune was influenced by the lifecycle of mushrooms, with his imagination being helped along by a more "magic" variety.

Louis de Bernières

> De Bernières is an avid musician who plays flute, mandolin, clarinet and guitar.

H. G. Wells

> In 1914 H.G. Wells published a novel titled The World Set Free. In this book he described a weapon that was eerily similar to the first atomic bomb unleashed on the Japanese cities of Hiroshima and Nagasaki in 1945.

George Orwell

> Orwell intentionally got himself arrested for being "drunk and incapable."

Jane Austen

> The author of her first novel, Sense and Sensibility was simply "A Lady," and her later works like Pride and Prejudice were credited to "the Author of Sense and Sensibility." She wasn't named as the author of her novels until after her death!

Margaret Atwood

> Atwood was the first author to contribute to The Future Library Project, which will take one writer's contribution each year for one hundred years to be printed in the year 2114.

### 9. Alter books table

Now that we are storing data about the authors of the books, we need some way to associate the two piece of information.

Our books table already exists and has data on it that we don't want to lose!
Without losing any data, alter the books table to allow us to link each book to its author.

_Hint: check out [section 17 of the tutorial](https://sqlbolt.com/lesson/altering_tables) and the FOREIGN KEYS section of the notes_

### 10. Update the books

Next, we need to update each book with the id of its author.

Here is a list of each book with the correct author.

| title                                | author                   |
| ------------------------------------ | ------------------------ |
| The Hitchhiker's Guide to the Galaxy | Douglas Adams            |
| The Little Prince                    | Antoine de Saint-Exupéry |
| The Tale of Peter Rabbit             | Beatrix Potter           |
| Emma                                 | Jane Austen              |
| Nineteen Eighty-Four: A Novel        | George Orwell            |
| The Handmaid's Tale                  | Margaret Atwood          |
| The War of the Worlds                | H. G. Wells              |
| Pride and Prejudice                  | Jane Austen              |

### 11. Select books using JOINs

Let's make sure we associated each book with the correct author.

Query your tables to get a list of the book titles with the corresponding author.

Query the tables to see which authors don't have an associated book.

### 12. Create a genres table

Once again the bookshop owner has decided that they'd like some extra features added to the database that you're building. This time they'd like to add the ability to categorise the books by genre.

Create a table to store genres. Each genre will also need a unique identifier.

### 13. Insert some genres

Add some genres to your genres table. Here is a selection of genres that the bookshop stocks:

| genre           |
| --------------- |
| science fiction |
| children's      |
| romance         |
| fantasy         |
| dystopian       |
| science         |
| adventure       |
| classics        |

### 14. Create a junction table

Each book can belong to one or more genres and each genre can have one or more books.

Using the "Many-to-Many Relationships" section of the notes, try creating a junction table allow genres to be assigned to each book.

### 15. Associate books with genres

Add some data to the junction table that links books with their respective genres.

### 16. Query the books & genres

List all genres that a certain book belongs to. Make sure this works for books that belong to more than one genre.

List all the books belonging to a certain genre. Make sure this works for genres with multiple books.

### 17. Aggregate queries

List the total number of books we have by each author.

List the average price for books of a specific genre. Make sure this works for genres with multiple books.

### 18. Handle deletion of parent records

Handle the deletion of a book. When it is deleted, all of the associated records in the books_genres table should get deleted too. For this update your `CREATE TABLE` statement in `14` to make your `books_genres` table automatically delete the relevant rows.

Handle the deletion of an author. When they are deleted, all of their books should get deleted too. (This should be achieved by altering both the books table in `02` and the books_genres table in `14`)

## More Challenges

😱 Amazing work if you have made it this far! 🥇

If you're up for some more challenges, have a go at some of these:

1. Use the [ARRAY_AGG()](https://www.postgresql.org/docs/current/functions-aggregate.html) function to get a list of each book in a single row, with all genres that the book belongs to.

2. Add the ability to add reviews to the books. You should then be able to query to find:

- all reviews of a specified book
- the average rating of a book
- see only the most favourable and unfavourable reviews for a specified book
- list all books above a certain average rating

3. Add users to the database so that each review can be associated to a user. You should then be able to:

- list all reviews by a single user
- find out the average rating that a user has given in all of their reviews
- list books that a user has not reviewed

## Advanced

### Design your database

Well done for making it this far. It's time to design your own database.

You are going to create a database for an Italian recipe website. The meals on our website will be divided up like so...

Your website will need to keep track of several recipes (Minestrone Soup, Pepperoni Pizza, Pistachio gelato etc...) and will need to be able to query these recipes based on a number of conditions.

- Course (Whether the recipe is suitable for a starter, main, dessert, drink, etc...)
- Category (Fish, Pizza, Pasta, Soup, etc...)
- Ingredients (Tomatoes, Eggs, Mozzarella, etc...)

Design tables for your database that will be able to track all of this information and the relation between the different data sets. Think carefully about what type of relations your tables have to each other.

Create a new `.sql` file to setup your database and tables and insert some example data.

You might want to run some queries at this point to validate everything is setup correctly.

### Query your data

Once you have your database setup run some queries against it to make sure you can provide all the information your website might need.

Some example queries to get you started could be:

- Write a query which returns a recipe by its name with all the ingredients needed to cook that recipe
- Find all the recipes which belong to a certain course
- Find all the recipes which use all of a certain set of ingredients
- Find all the recipes which use one or more of a certain set of ingredients

Make sure that you can combine your searches to do more advanced filtering such as

- Find all the pizzas that include garlic or tomatoes but not mushrooms

### Add a new table

As a final challenge, create a table for Methods used and integrate this with your existing tables. Bear in mind that ingredients can be cooked using a variety of methods depending on which dish they are being used in, and each method can be used on any number of ingredients. For example 'Poach' could be a Method that applied to fish or eggs; 'Whisk' could apply to eggs in one recipe, but not to eggs in another.

As your website is currently in use you will be unable to drop the whole thing and start again. Simulate this by adding your methods table **after** you have created the other tables and inserted the data. Think about how you will need to adjust your current table setup after the fact to accommodate methods and preserve the original data.

Run some queries related to your methods. Try the following to get started:

- Find all of the methods used in starters
- Find all of the ingredients that use a specific method
- Find all of the ingredients that use more than 2 methods
- Find all of the ingredients for a specific recipe and the relevant methods used for those ingredients
