console.log("Hello World");
function getAllBooks() {
    return [
        { title: 'Book 1', author: 'Some guy', available: true },
        { title: 'Book 2', author: 'Some other guy', available: true },
        { title: 'Book 3', author: 'Some third guy', available: false }
    ];
}
function printAllAvailableBooks(books) {
    var totalBooks = books.length;
    console.log("Total # of books: " + totalBooks);
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            console.log('Title: ' + currentBook.title);
        }
    }
}
var books = getAllBooks();
printAllAvailableBooks(books);
//# sourceMappingURL=app.js.map