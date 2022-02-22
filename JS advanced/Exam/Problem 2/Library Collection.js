class LibraryCollection{
    constructor(capacity){
       this.capacity=capacity;
       this.books=[];
    }

    addBook (bookName, bookAuthor){
        if(this.capacity==0){
            throw new Error("Not enough space in the collection.");
        }
        this.books.push({bookName,bookAuthor,payed:false})
        this.capacity-=1;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook( bookName ) {
        if(!this.books.some(x=>x.bookName==bookName)){
            throw new Error(`${bookName} is not in the collection.`);
        }
        let findedBook=this.books.find(x=>x.bookName==bookName)
        if(findedBook.payBook){
            throw new Error(`${bookName} has already been paid.`);
        }else{
          findedBook.payBook=true;
          return `${bookName} has been successfully paid.`
        }

    }

    removeBook(bookName) {
        if(!this.books.some(x=>x.bookName==bookName)){
            throw new Error(`The book, you're looking for, is not found.`);
        }

        let findedBook=this.books.find(x=>x.bookName==bookName)

        if(!findedBook.payBook){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }else {
            let index=this.books.findIndex(x=>x.bookName==bookName);
            this.books.splice(index,1)
            return `${bookName} remove from the collection.`
        }

    }

    getStatistics(bookAuthor){

        let result =[];
        if(!bookAuthor){
         result.push(`The book collection has ${ this.capacity } empty spots left.`);
         this.books.sort((a,b)=>b.bookAuthor.localeCompare(a.bookAuthor)).forEach(x => {
            if(x.payBook){
                result.push(`${x.bookName} == ${x.bookAuthor} - Has Paid.`)
            }else{
                result.push(`${x.bookName} == ${x.bookAuthor} - Not Paid.`)
            }
        })
        return result.join('\n')
        }else{
            let findbook=this.books.find(x=>x.bookAuthor==bookAuthor);
            if(!findbook){
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            if(findbook.payBook){
                return `${findbook.bookName} == ${findbook.bookAuthor} - Has Paid.`
            }else{
                return `${findbook.bookName} == ${findbook.bookAuthor} - Not Paid.`
            }
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());



