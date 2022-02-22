function solve (inputArray){
 let firstNumber= Number(inputArray.shift());
 let lastNumber= Number(inputArray.pop());
 

 return firstNumber+lastNumber;

}

let Result=solve(['20','30','40']);
console.log(Result);