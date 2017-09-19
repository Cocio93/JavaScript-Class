var http = require("http");
;
// B
function printBookInfo(book) {
    console.log("Author: " + book.author + "\n Title: " + book.title);
}
var myBook = { title: "SomeTitle", author: "Dr. Jones", published: new Date(), pages: 5000 };
printBookInfo(myBook);
;
function printBookInfoOpt(book) {
    if (book.author) {
        console.log("Author: " + book.author);
    }
    if (book.title) {
        console.log("Title: " + book.title);
    }
    if (book.published) {
        console.log("Published: " + book.published);
    }
    if (book.pages) {
        console.log("Pages: " + book.pages);
    }
}
var myBook2 = { title: "SomeOtherTitle", author: "Dr. Jones Jr." };
printBookInfoOpt(myBook2);
;
function printBookInfoOpt2(book) {
    if (book.author) {
        console.log("Author: " + book.author);
    }
    if (book.title) {
        console.log("Title: " + book.title);
    }
    if (book.published) {
        console.log("Published: " + book.published);
    }
    if (book.pages) {
        console.log("Pages: " + book.pages);
    }
}
var myBook3 = { title: "SomeThirdTitle", author: "Dr. Jones Jr. Jr." };
printBookInfoOpt2(myBook2);
// F
var JavaBook = /** @class */ (function () {
    function JavaBook(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
    return JavaBook;
}());
var myBook4 = new JavaBook("Of Mice And Men", "John Steinbeck", new Date(1, 1, 1937), 450);
console.log("F\n");
printBookInfoOpt2(myBook4);
