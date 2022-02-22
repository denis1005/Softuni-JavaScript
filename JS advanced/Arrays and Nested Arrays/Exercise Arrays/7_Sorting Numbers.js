function solve(inputArray){
 let sortedArray=inputArray.sort((a, b) => a-b);
 let numberCycles=sortedArray.length
 let result=[];

 for (let i = 0; i < numberCycles; i++) {
     if (i%2==0){
     result.push(sortedArray.shift());
     }else{
         result.push(sortedArray.pop());
     }
     
 }

 return result;

}

result = solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

console.log(result);