class Restaurant{
    constructor(budgetMoney){
     this.budgetMoney=budgetMoney;
     this.menu={};
     this.stockProducts={};
     this.history=[];
    }
    menusCount=0;
    loadProducts(products) {
        let result=[];
        for (const product of products) {
            let[productName,productQuantity,productTotalPrice]=product.split(' ');
            productQuantity=Number(productQuantity);
            productTotalPrice=Number(productTotalPrice);
            if(this.budgetMoney>=productTotalPrice){
                if(this.stockProducts[productName]){
                    this.stockProducts[productName]+=productQuantity;
                    this.budgetMoney-=productTotalPrice;
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
                }else{
                    this.stockProducts[productName]=productQuantity;
                    this.budgetMoney-=productTotalPrice;
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
                }
               
            }else{
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }

        return this.history.join('\n');
    }
    addToMenu(meal,neededProducts,price){
      
        if(!this.menu[meal]){
            this.menu[meal]={price:price,product:{}};
           
            

            for (const elements of neededProducts) {
                let [productName,productQuantity]=elements.split(' ');
                productQuantity=Number(productQuantity);
                this.menu[meal].product[productName]=productQuantity;
            }     
            this.menusCount++;
            if(this.menusCount==1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`

            }else{
                return `Great idea! Now with the ${meal} we have ${this.menusCount} meals in the menu, other ideas?`
            }
        }else{
            return `The ${meal} is already in the our menu, try something different.`
        }
        
      
    }
    showTheMenu(){
        let counter=this.menusCount;
        let result=[];
        
        if(this.menusCount==0){
          return "Our menu is not ready yet, please come later..."
        }else{
            for (const key in this.menu) {
               result.push(`${key} - $ ${this.menu[key].price}`)
            }
        }

        return result.join('\n')
    }
    makeTheOrder(meal){
     if(!this.menu[meal]){
         return `There is not ${this.meal} yet in our menu, do you want to order something else?`
     }else{
         let arrayOfKeyStockProducts=Object.keys(this.stockProducts);
         let arrayOfKeyGivenMeal=Object.keys(this.menu[meal].product);

         for (const ingredients of arrayOfKeyGivenMeal) {
             let mealInbgrediands=this.menu[meal].product[ingredients];
             let stocInbgrediands=this.stockProducts[ingredients]
             if(this.stockProducts[ingredients]){
                 if(this.stockProducts[ingredients]>=mealInbgrediands){
                    this.stockProducts[ingredients]-=mealInbgrediands;
                 }else{
                     return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                 }
             }else{
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
             }
         }
         return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
     }
    }

}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

