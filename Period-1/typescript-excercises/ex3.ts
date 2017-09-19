let http = require("http");

// A

interface IBook {
    title, author: string;
    published: Date;
    pages: number;
};

// B

function printBookInfo(book: IBook) {
   console.log("Author: " + book.author + "\n Title: " + book.title);

}

let myBook = {title: "SomeTitle", author: "Dr. Jones", published: new Date(), pages: 5000};
printBookInfo(myBook);

// C

// Duck-Typing means, that you are not checking whether or not,
// the IBook is an IBook, but rather if it contains the properties
// that an IBook should contain. 


// D

interface IBookOpt {
    title, author: string;
    published?: Date;
    pages?: number;
};

function printBookInfoOpt(book: IBookOpt) {
    if (book.author) {console.log("Author: " + book.author)}
    if (book.title) {console.log("Title: " + book.title)}
    if (book.published) {console.log("Published: " + book.published)}
    if (book.pages) {console.log("Pages: " + book.pages)}

}

let myBook2 = {title: "SomeOtherTitle", author: "Dr. Jones Jr."};
printBookInfoOpt(myBook2);

// E

interface IBookOpt2 {
    title, readonly author: string;
    published?: Date;
    pages?: number;
};

function printBookInfoOpt2(book: IBookOpt2) {
    if (book.author) {console.log("Author: " + book.author)}
    if (book.title) {console.log("Title: " + book.title)}
    if (book.published) {console.log("Published: " + book.published)}
    if (book.pages) {console.log("Pages: " + book.pages)}

}

let myBook3 = {title: "SomeThirdTitle", author: "Dr. Jones Jr. Jr."};
printBookInfoOpt2(myBook2);

// F

class JavaBook implements IBookOpt2{
    constructor (public title: string, public author: string, public published: Date, public pages: number){
    this.title = title;
    this.author = author;
    this.published = published;
    this.pages = pages;
    }
}

var myBook4 = new JavaBook("Of Mice And Men", "John Steinbeck", new Date(1,1,1937), 450);
console.log("F\n")
printBookInfoOpt2(myBook4);