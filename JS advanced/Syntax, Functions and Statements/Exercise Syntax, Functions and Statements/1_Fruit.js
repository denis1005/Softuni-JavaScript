function solve (typeOfFruit, weight, price){
    let weightInKg= (weight/1000);
    let priceIneed=(weightInKg*price).toFixed(2);
    console.log(`I need $${priceIneed} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`);

}

solve('orange', 2500, 1.80);