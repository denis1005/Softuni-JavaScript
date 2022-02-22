const expect = require('chai').expect;
const mathEnforcer = require('./Math Enforcer');

describe('MathEnforcer', () => {
    describe('addFive', () => {
        it('Should Return number plus 5', () => {
            // Arrange
            let testInput=5;
            let expectedOutput=10;
    
            // Act
            let output=mathEnforcer.addFive(testInput);
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(expectedOutput).to.equal(output);
        });
        it('Should Return 0 plus 5', () => {
            // Arrange
            let testInput=0;
            let expectedOutput=5;
    
            // Act
            let output=mathEnforcer.addFive(testInput);
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(expectedOutput).to.equal(output);
        });
        it('Should Return -1 plus 5', () => {
            // Arrange
            let testInput=-1;
            let expectedOutput=4;
    
            // Act
            let output=mathEnforcer.addFive(testInput);
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(expectedOutput).to.equal(output);
        });
        it('Should Return undefined if it is NAN', () => {
            // Arrange
            let testInput='a';
            let expectedOutput=undefined;
    
            // Act
            let output=mathEnforcer.addFive(testInput);
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(expectedOutput).to.equal(output);
        });
    
    })
    describe('subtractTen', () => {
        it('Should Return number subtracted 10', () => {
            // Arrange
            let testInput=10;
            let expectedOutput=0;
    
            // Act
            let output=mathEnforcer.subtractTen(testInput);
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(expectedOutput).to.equal(output);
        });

        it('Should Return 0 subtracted 10', () => {
            // Arrange
            let testInput=0;
            let expectedOutput=-10;
    
            // Act
            let output=mathEnforcer.subtractTen(testInput);
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(expectedOutput).to.equal(output);
        });

        it('Should Return -10 subtracted 10', () => {
            // Arrange
            let testInput=-10;
            let expectedOutput=-20;
    
            // Act
            let output=mathEnforcer.subtractTen(testInput);
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(expectedOutput).to.equal(output);
        });

        it('Should Return -9.5 subtracted 10', () => {
            // Arrange
            let testInput=0.5;
            let expectedOutput=-9.5;
    
            // Act
            let output=mathEnforcer.subtractTen(testInput);
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(expectedOutput).to.equal(output);
        });

        it('Should Return undefined if the input is NAN', () => {
            // Arrange
            let testInput='a';
            let expectedOutput=undefined;
    
            // Act
            let output=mathEnforcer.subtractTen(testInput);
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(expectedOutput).to.equal(output);
        });
      
      
    
    })
    describe('sum', () => {
        it('Should Return number sum', () => {
            // Arrange
            let testInput1=10;
            let testInout2=20;
            let expectedOutput=30;
    
            // Act
            let output=mathEnforcer.sum(testInput1,testInout2);
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(expectedOutput).to.equal(output);
        });
        it('Should Return number sum for negative numbers', () => {
            // Arrange
            let testInput1=-10;
            let testInout2=-20;
            let expectedOutput=-30;
    
            // Act
            let output=mathEnforcer.sum(testInput1,testInout2);
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(expectedOutput).to.equal(output);
        });
        it('Should Return number 0 for 0 numbers', () => {
            // Arrange
            let testInput1=-0;
            let testInout2=-0;
            let expectedOutput=-0;
    
            // Act
            let output=mathEnforcer.sum(testInput1,testInout2);
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(expectedOutput).to.equal(output);
        });
        it('Should Return  undefined if first parameter is NAN', () => {
            // Arrange
            let testInput1='a';
            let testInout2=0;
            
    
            // Act
            
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(undefined).to.equal(mathEnforcer.sum(testInput1,testInout2));
        });

        it('Should Return  undefined if second parameter is NAN', () => {
            // Arrange
            let testInput1=1;
            let testInout2='a';
            
    
            // Act
            
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(undefined).to.equal(mathEnforcer.sum(testInput1,testInout2));
        });

        it('Should Return  undefined if both parameters are NAN', () => {
            // Arrange
            let testInput1=[];
            let testInout2='a';
            
    
            // Act
            
    
            // Assert
            // assert.equal(actualSum, expectedSum);
            expect(undefined).to.equal(mathEnforcer.sum(testInput1,testInout2));
        });



        
      
    
    })
    
})