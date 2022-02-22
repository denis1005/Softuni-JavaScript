function solve (inputArray){
let result= [];

for (let index = 0; index < inputArray.length; index++) {

    if (inputArray[index]<0) {
        result.unshift(inputArray[index]);
    }else{
        result.push(inputArray[index])
    }
    
}
 for (const results of result) {
     console.log(results);
 }

}

solve([7, -2, 8, 9])