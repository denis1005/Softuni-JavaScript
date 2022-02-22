function solve(input){
let result={};

for (const items of input) {
    let [productName,productPrice]=items.split(' : ');
    productPrice=Number(productPrice);
    if(result[productName[0]]){
        result[productName[0]][productName]=productPrice;
    }else{
        result[productName[0]]={[productName]:productPrice};
    }
}
let sortedResult=Object.keys(result).sort((a,b)=>a.localeCompare(b));

for (const key of sortedResult) {
     let keysOfCurrentElement= Object.keys(result[key]).sort((a,b)=>a.localeCompare(b));
     console.log(key);
     keysOfCurrentElement.forEach(element => {
         console.log(`  ${element}: ${result[key][element]} `)
     });
    }
}



solve(['Appricot : 20.4',
'Fridge : 1500',
'Apple : 1.25',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);