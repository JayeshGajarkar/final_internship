class Book {
    constructor(id, title, author, isavailable) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isavailable = isavailable; // boolean
    }
}

class Member {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = []; // List to store books
    }
}

class Library {
    constructor() {
        this.books = []; // List of available books
        this.members = []; // List of members
    }

    addBook(title, author) {
        const book = new Book(this.books.length + 1, title, author, true);
        this.books.push(book);
    }

    registerMember(name) {
        const member = new Member(this.members.length + 1, name);
        this.members.push(member);
    }

    borrowBook(memberId, bookId) {
        const member = this.members.find(m => m.id === memberId);
        const book = this.books.find(b => b.id === bookId && b.isavailable);

        if (member && book) {
            if(member.borrowedBooks.length>=1){
                console.log("Maximum limit reached");
            }else{
                book.isavailable = false;
                member.borrowedBooks.push(book);
                console.log(`${member.name} borrowed "${book.title}"`);
            }
        } else {
            console.log("Book is not available or member not found.");
        }
    }

    returnBook(memberId, bookId) {
        const member = this.members.find(m => m.id === memberId);
        const book = this.books.find(b => b.id === bookId);

        if (member && book) {
            book.isavailable = true;
            member.borrowedBooks = member.borrowedBooks.filter(b => b.id !== bookId);
            console.log(`${member.name} returned "${book.title}"`);
        } else {
            console.log("Book or member not found.");
        }
    }

    viewAllBooks() {
        this.books.forEach(book => {
            console.log(`${book.id}. ${book.title} by ${book.author} - ${book.isavailable ? 'Available' : 'Not Available'}`);
        });
    }

    viewMemberInfo() {
        this.members.forEach(member => {
            console.log(`${member.id}. ${member.name} - Borrowed Books: ${member.borrowedBooks.map(b => b.title).join(', ')}`);
        });
    }

    searchBook(user_input){
        const result=this.books.filter(book=>(book.title.includes(user_input)|| book.author.includes(user_input)));
        result.forEach(book => console.log(`${book.id} | ${book.title}  | ${book.author} | ${book.isavailable} `));
    }
}


const library = new Library();

library.addBook("Rich dad poor dad", "abc");
library.addBook("Ikigai", "xyz");
library.addBook("Atomic habit", "pqr");

library.registerMember("Jayesh Gajarkar");
library.registerMember("Shri Nashte");
library.registerMember("abc");
library.borrowBook(1, 1); 
library.borrowBook(1, 2); 
/*library.returnBook(1, 1); 
library.borrowBook(2, 1); 
library.viewAllBooks();
library.viewMemberInfo();
library.borrowBook(1,2);
library.viewAllBooks();*/
library.searchBook("abc");



