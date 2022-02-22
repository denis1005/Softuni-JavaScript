function solve (inputArray){

let result=[];
let CurrentBiggestNumber=0;

for (let i = 0; i < inputArray.length; i++) {
    
    if(CurrentBiggestNumber>inputArray[i]){
        continue;
    }else{
        CurrentBiggestNumber=inputArray[i];
        result.push(inputArray[i]);
    }
    
}

return result;

}

let result= solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )
console.log(result);