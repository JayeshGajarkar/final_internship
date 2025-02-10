"use strict";
var Category;
(function (Category) {
    Category["Fiction"] = "Fiction";
    Category["NonFiction"] = "Nonfiction";
    Category["Science"] = "Science";
    Category["History"] = "History";
    Category["Children"] = "Children";
})(Category || (Category = {}));
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        if (this.books.some(function (b) { return b.id === book.id; })) {
            console.log("Book with ID ".concat(book.id, " already exits"));
            return;
        }
        this.books.push(book);
        console.log("Book with title ".concat(book.title, " is Added"));
    };
    Library.prototype.listBook = function () {
        //this.books.forEach(book => console.log(`${book.id} | ${book.title} | ${book.author} | ${book.category} | ${book.isAvailable} |`));
        return this.books;
    };
    Library.prototype.searchBytitle = function (key) {
        //const result = this.books.filter(b =>b.title===key);
        var result = [];
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var b_1 = _a[_i];
            if (b_1.title == key) {
                result.push(b_1);
            }
        }
        return result;
    };
    Library.prototype.searchByCategory = function (key) {
        //const result = this.books.filter(b =>b.title===key);
        var result = [];
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var b_2 = _a[_i];
            if (b_2.category == key) {
                result.push(b_2);
            }
        }
        return result;
    };
    Library.prototype.searchByAvaibility = function (key) {
        //const result = this.books.filter(b =>b.title===key);
        var result = [];
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var b_3 = _a[_i];
            if (b_3.isAvailable == key) {
                result.push(b_3);
            }
        }
        return result;
    };
    return Library;
}());
var newLib = new Library();
var book1 = {
    id: 1,
    title: "abc",
    author: "xyz",
    category: Category.Fiction,
    isAvailable: true,
};
var book2 = {
    id: 2,
    title: "qwe",
    author: "mnb",
    category: Category.Children,
    isAvailable: false,
};
var book3 = {
    id: 3,
    title: "pqr",
    author: "vnb",
    category: Category.Children,
    isAvailable: true,
};
newLib.addBook(book1);
newLib.addBook(book2);
newLib.addBook(book3);
//console.log(newLib.listBook());
console.log(newLib.searchBytitle("pqr"));
console.log(newLib.searchByCategory(Category.Children));
console.log(newLib.searchByAvaibility(true));
