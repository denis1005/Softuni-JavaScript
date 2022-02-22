const {expect} = require('chai');
let {library}  = require("./library.js");
describe("library", function() {
    describe("calcPriceOfBook", function() {
        it("calcPriceOfBook valid input with year > 1980", function() {
            // Arrange
             let bookName='Elon Musk';
             let year=2005;
             let defaultPrice=20;
            // Act
             let result=library.calcPriceOfBook(bookName,year);
            // Assert
              expect(result).to.equal(`Price of ${bookName} is ${defaultPrice.toFixed(2)}`)
        });
        it("calcPriceOfBook valid input with year <= 1980", function() {
            // Arrange
             let bookName='Elon Musk';
             let year=1979;
             let defaultPrice=20;
             let totalPrice=defaultPrice -(defaultPrice * 0.5);
            // Act
             let result=library.calcPriceOfBook(bookName,year);
            // Assert
              expect(result).to.equal(`Price of ${bookName} is ${totalPrice.toFixed(2)}`)
        });
        it("calcPriceOfBook  not valid input with bookName not a string", function() {
            // Arrange
             let bookName=1;
             let year=1979;
             
            // Act
            
            // Assert
              expect(() => library.calcPriceOfBook(bookName,year)).to.throw(Error, "Invalid input");
        });
        it("calcPriceOfBook  not valid input with year not a number", function() {
            // Arrange
             let bookName='Elon Musk';
             let year='123';
             
            // Act
            
            // Assert
              expect(() => library.calcPriceOfBook(bookName,year)).to.throw(Error, "Invalid input");
        });
        it("calcPriceOfBook  not valid inputs", function() {
            // Arrange
             let bookName=123;
             let year='123';
             
            // Act
            
            // Assert
              expect(() => library.calcPriceOfBook(bookName,year)).to.throw(Error, "Invalid input");
        });
     });
     describe("findBook", function() {
        it("length of the booksArr array is zero", function() {
            // Arrange
             let booksArr=[]
             let desiredBook='Troy';
             
            // Act
             
            // Assert
            expect(() => library.findBook(booksArr,desiredBook)).to.throw(Error, "No books currently available");
        });
        it("Book is found in the array", function() {
            // Arrange
             let booksArr=["Troy", "Life Style", "Torronto"]
             let desiredBook='Troy';
             
            // Act
            let result=library.findBook(booksArr,desiredBook)
             
            // Assert
            expect(result).to.equal("We found the book you want.");
        });
        it("Book is  not found in the array", function() {
            // Arrange
             let booksArr=["Troy", "Life Style", "Torronto"]
             let desiredBook='Elon Musk';
             
            // Act
            let result=library.findBook(booksArr,desiredBook)
             
            // Assert
            expect(result).to.equal("The book you are looking for is not here!");
        });
        
     });
     describe("arrangeTheBooks ", function() {
        it("Count book is negative number", function() {
            // Arrange
            let count=-1;
            let testInput2='adsdasasd';
            let testInput3=[];
            // Act
             
            // Assert
            expect(() => library.arrangeTheBooks(count)).to.throw(Error, "Invalid input");
            expect(() => library.arrangeTheBooks(testInput2)).to.throw(Error, "Invalid input");
            expect(() => library.arrangeTheBooks(testInput3)).to.throw(Error, "Invalid input");
        });
        it("No available shelf's", function() {
            // Arrange
            let count=1000;
            
            // Act
             let result=library.arrangeTheBooks(count);
            // Assert
            expect(result).to.equal("Insufficient space, more shelves need to be purchased.");
        });
        it("Valid input with available spaces", function() {
            // Arrange
            let count=10;
            
            // Act
             let result=library.arrangeTheBooks(count);
            // Assert
            expect(result).to.equal("Great job, the books are arranged.");
        });
        it("Valid input with available spaces equals tho shelf count", function() {
            // Arrange
            let count=40;
            
            // Act
             let result=library.arrangeTheBooks(count);
            // Assert
            expect(result).to.equal("Great job, the books are arranged.");
        });


        
        
        
     });


     // TODO: …
});
