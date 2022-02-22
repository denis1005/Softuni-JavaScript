function solve (inputArray){
let numberToAdd=1;
let result= [];

for (let i = 0; i < inputArray.length; i++) {
    
    if (inputArray[i]=='add') {
        result.push(numberToAdd);
        numberToAdd++;
        continue;
    }
    if (inputArray[i]=='remove') {
        
       result.pop();
       numberToAdd++;
       continue;
    } 
        
}

if (result.length==0) {
    console.log('Empty');
} else {
    for (const results of result) {
        console.log(results);
    }
}

}

solve(['remove', 
'remove', 
'remove']
)