function solve (inputArray){
let sortInputArray= inputArray.sort((a,b)=>a-b);
let result= [sortInputArray[0], sortInputArray[1]];
console.log(result.join(' '));
}
solve([30, 15, 50, 5])