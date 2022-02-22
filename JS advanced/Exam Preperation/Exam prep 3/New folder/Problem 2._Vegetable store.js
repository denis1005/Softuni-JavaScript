class VegetableStore{
    constructor(owner,location){
      this.owner=owner;
      this.location=location;
      this.availableProducts =[];
    }
    
    loadingVegetables(vegetables) {
        let typeArr = [];
 
        for (let strSequence of vegetables) {
            let [type, quantity, price] = strSequence.split(' ');
            quantity = Number(quantity);
            price = Number(price);
 
            let productObj = this.availableProducts.find(
                (x) => x.type === type
            );
 
            if (productObj) {
                productObj.quantity += quantity;
                if (price > productObj.price) {
                    productObj.price = price;
                }
            } else {
                typeArr.push(type);
                this.availableProducts.push({ type, quantity, price });
            }
 
        }
 
        return `Successfully added ${typeArr.join(', ')}`;
    }
    buyingVegetables (selectedProducts){
        let totalPrice=0.00;
        for (const product of selectedProducts) {
            let[type,quantity]=product.split(' ');
            quantity=Number(quantity);
            let elementToBuy=this.availableProducts.find(x=>x.type==type);
            if(elementToBuy==undefined){
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if(elementToBuy.quantity<quantity){
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            totalPrice=totalPrice+(elementToBuy.price*quantity);
            elementToBuy.quantity-=quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable (type, quantity){
        let givenquantity=Number(quantity);
        let givenType=this.availableProducts.find(x=>x.type==type);

        if(givenType==undefined){
            throw new Error( `${type} is not available in the store.`);
        }
        if(givenType.quantity<givenquantity){
            givenType.quantity=0;
            return `The entire quantity of the ${type} has been removed.`

        }
        givenType.quantity=givenType.quantity-givenquantity;
        return `Some quantity of the ${type} has been removed.`

    }
    revision (){
        let result=[];
        result.push("Available vegetables:");
        this.availableProducts.sort((a,b)=>a.price-b.price)
        .forEach(element => {
            result.push(`${element.type}-${element.quantity}-$${element.price}`)
        });
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n');

    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


