function solve (inputArray,N){
    let result = [];
    
    for (let index = 0; index < inputArray.length; index+=N) {
        result.push(inputArray[index]);
        
    }
    return result;

}

solve (['1', 
'2',
'3', 
'4', 
'5'], 
6
);