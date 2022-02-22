function solve(inputArray){
let result='true';
let currentSumOfRows=0;
let currentSumOfColons=0;
// Sum of rows
for (const row of inputArray) {
    let sumOfRow=row.reduce((previousValue, currentValue)=>previousValue+currentValue);

    if(currentSumOfRows==0){
        currentSumOfRows=sumOfRow;
        continue;
    }
    if(currentSumOfRows!==sumOfRow){
      result='false';
      break;
    }
}
console.log(result);

for (let i = 0; i < inputArray.length; i++) {
    let sumOfCow=0;
    for (let j = 0; j < inputArray.length; j++) {
       sumOfCow+=inputArray[i][j];
        
    }

    if(currentSumOfColons==0){
        currentSumOfRows=sumOfCow;
        continue;}

    if(currentSumOfColons!==sumOfCow){
        result='false';
        break;
      }  
}
}



solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]])
