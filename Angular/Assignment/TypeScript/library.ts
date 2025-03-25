enum Category{
    Fiction="Fiction",
    NonFiction="Nonfiction",
    Science="Science",
    History="History",
    Children="Children",
}

interface Book {
    id:number;
    title:string;
    author:string;
    category:Category;
    isAvailable:boolean;
}

class Library {
    private books:Book[]=[];

    addBook(book:Book):void {
        if(this.books.some(b=>b.id===book.id)){
            console.log(`Book with ID ${book.id} already exits`);
            return;
        }
        this.books.push(book);
        console.log(`Book with title ${book.title} is Added`);
    }

    listBook():Book[] {
        //this.books.forEach(book => console.log(`${book.id} | ${book.title} | ${book.author} | ${book.category} | ${book.isAvailable} |`));
        return this.books;
    }

    searchBytitle(key:string):Book[] {
        //const result = this.books.filter(b =>b.title===key);
        const result:Book[]=[];
        for(let b of this.books){
            if(b.title==key){
                result.push(b);
            }
        }
        
        return result;
    }

    searchByCategory(key:string):Book[] {
        //const result = this.books.filter(b =>b.title===key);
        const result:Book[]=[];
        for(let b of this.books){
            if(b.category==key){
                result.push(b);
            }
        }
        
        return result;
    }

    searchByAvaibility(key:boolean):Book[] {
        //const result = this.books.filter(b =>b.title===key);
        const result:Book[]=[];
        for(let b of this.books){
            if(b.isAvailable==key){
                result.push(b);
            }
        }
        
        return result;
    }
}

const newLib=new Library();
const book1:Book={
    id:1,
    title:"abc",
    author:"xyz",
    category:Category.Fiction,
    isAvailable:true,
}

const book2:Book={
    id:2,
    title:"qwe",
    author:"mnb",
    category:Category.Children,
    isAvailable:false,
}

const book3:Book={
    id:3,
    title:"pqr",
    author:"vnb",
    category:Category.Children,
    isAvailable:true,
}
newLib.addBook(book1);
newLib.addBook(book2);
newLib.addBook(book3);
//console.log(newLib.listBook());
console.log(newLib.searchBytitle("pqr"));
console.log(newLib.searchByCategory(Category.Children));
console.log(newLib.searchByAvaibility(true));
