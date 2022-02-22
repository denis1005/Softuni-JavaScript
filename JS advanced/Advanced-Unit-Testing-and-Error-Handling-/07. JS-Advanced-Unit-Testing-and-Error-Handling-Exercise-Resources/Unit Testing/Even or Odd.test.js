const expect = require('chai').expect;
const isOddOrEven = require('./Even or Odd');

describe('Even or Odd', () => {
    it('Should Return undefined', () => {
        // Arrange
        let testInput=3;
        let expectedOutput=undefined;

        // Act
        let output=isOddOrEven(testInput);

        // Assert
        // assert.equal(actualSum, expectedSum);
        expect(expectedOutput).to.equal(output);
    });

    it('Should check if the lenght of the sting is even', () => {
        // Arrange
        let testInput='1234';
        let expectedOutput="even";

        // Act
        let output=isOddOrEven(testInput);

        // Assert
        // assert.equal(actualSum, expectedSum);
        expect(expectedOutput).to.equal(output);
    });

    it('Should check if the length of the sting is odd', () => {
        // Arrange
        let testInput='123';
        let expectedOutput="odd";

        // Act
        let output=isOddOrEven(testInput);

        // Assert
        // assert.equal(actualSum, expectedSum);
        expect(expectedOutput).to.equal(output);
    });

    
})