let { expect } = require('chai');
let {flowerShop}  = require("./flowerShop");
describe("FlowerShop", function() {
    describe("calcPriceOfFlowers", function() {
        it("Throws Error in case of invalid inputs", function() {
            //Arrange

            // Act

            //Expect

            expect(() => flowerShop.calcPriceOfFlowers('a','a','b')).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('aa',1,'b')).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('aa','n',1)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('aa',[],1)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers(1,1,1)).to.throw(Error, `Invalid input!`);

        });
        it("Valid inputs", function() {
            //Arrange
            let flower='sdadas';
            let price=1;
            let quantity=1;
            let result = price * quantity;
            // Act
            let resulta=flowerShop.calcPriceOfFlowers(flower, price, quantity);
            //Expect

            expect(resulta).to.equal(`You need $${result.toFixed(2)} to buy ${flower}!`);

        });
        it("Valid inputs with one - argument", function() {
            //Arrange
            let flower='sdadas';
            let price=-1;
            let quantity=1;
            let result = price * quantity;
            // Act
            let resulta=flowerShop.calcPriceOfFlowers(flower, price, quantity);
            //Expect

            expect(resulta).to.equal(`You need $${result.toFixed(2)} to buy ${flower}!`);

        });
        it("Valid inputs with one 0 argument", function() {
            //Arrange
            let flower='sdadas';
            let price=0;
            let quantity=1;
            let result = price * quantity;
            // Act
            let resulta=flowerShop.calcPriceOfFlowers(flower, price, quantity);
            //Expect

            expect(resulta).to.equal(`You need $${result.toFixed(2)} to buy ${flower}!`);

        });
        it("Valid inputs with two - argument", function() {
            //Arrange
            let flower='sdadas';
            let price=0;
            let quantity=1;
            let result = price * quantity;
            // Act
            let resulta=flowerShop.calcPriceOfFlowers(flower, price, quantity);
            //Expect

            expect(resulta).to.equal(`You need $${result.toFixed(2)} to buy ${flower}!`);

        });
     });
     describe("checkFlowersAvailable", function() {
        it("checkFlowersAvailable finds flower in gardenArr", function() {
            //Arrange
            let gardenArr=["Rose", "Lily", "Orchid"];
            let flower="Orchid"

            // Act
            let result=flowerShop.checkFlowersAvailable(flower,gardenArr)
            //Expect
            expect(result).to.equal(`The ${flower} are available!`);
            

        });
        it("checkFlowersAvailable can't finds flower in gardenArr", function() {
            //Arrange
            let gardenArr=["Rose", "Lily", "Orchid"];
            let flower="Ivan"

            // Act
            let result=flowerShop.checkFlowersAvailable(flower,gardenArr)
            //Expect
            expect(result).to.equal(`The ${flower} are sold! You need to purchase more!`);
            

        });
        
     });
     describe("sellFlowers", function() {
        it("sellFlowers no valid inputs", function() {
            //Arrange
            let gardenArr=["Rose", "Lily", "Orchid"];
           

            // Act
            
            //Expect
            expect(() => flowerShop.sellFlowers(gardenArr,'a')).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers(1,1)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers({},1)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers(gardenArr,10)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers(gardenArr,3)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers(gardenArr,-1)).to.throw(Error, `Invalid input!`);
            

        });
        it("sellFlowers no valid inputs", function() {
            //Arrange
            let gardenArr=["Rose", "Lily", "Orchid"];
            let space=0;
            
            let cutedArray=["Lily", "Orchid"];
            let expectedresult=cutedArray.join(' / ')
           

            // Act
            let resulta=flowerShop.sellFlowers(gardenArr,space);
            //Expect
             expect(resulta).to.equal(expectedresult);
            

        });
        
        
        
     });

     
     // TODO: …
});
