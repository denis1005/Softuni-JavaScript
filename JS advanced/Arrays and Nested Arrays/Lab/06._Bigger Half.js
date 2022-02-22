function solve(inputArray){
let result=inputArray.sort((a,b)=>a-b).slice(Math.floor(inputArray.length/2));
return result;
}
solve([3, 19, 14, 7, 2, 19, 6]);