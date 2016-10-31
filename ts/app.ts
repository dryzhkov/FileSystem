console.log("Hello World");


function getAllBooks() {
  return [
    { title: 'Book 1', author: 'Some guy', available: true },
    { title: 'Book 2', author: 'Some other guy', available: true },
    { title: 'Book 3', author: 'Some third guy', available: false }
  ];
}

function printAllAvailableBooks(books): void {

  const totalBooks: number = books.length;
  console.log("Total # of books: " + totalBooks);
  
  for (let currentBook of books) {
    if (currentBook.available) {
      console.log('Title: ' + currentBook.title);
    }
  }
}
const books = getAllBooks();
printAllAvailableBooks(books);