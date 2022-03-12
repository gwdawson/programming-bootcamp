const inquirer = require('inquirer');
const axios = require('axios');

inquirer
  .prompt([
    {
      name: 'book',
      type: 'input',
      message: 'Enter a Book!',
    },
    {
      name: 'author',
      type: 'input',
      message: 'Who is the author',
    },
  ])
  .then((res) => {
    let book = res.book;
    let author = res.author;

    if (book.split(' ').length > 1) {
      const bookSplit = book.split(' ');
      book = bookSplit.join('+');
    }
    if (author.split(' ').length > 1) {
      const authorSplit = author.split(' ');
      author = authorSplit.join('+');
    }

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${book}+inauthor:${author}`)
      .then((res) => {
        console.log(res.data.items[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  })
  .catch((e) => {
    console.log(e);
  });
