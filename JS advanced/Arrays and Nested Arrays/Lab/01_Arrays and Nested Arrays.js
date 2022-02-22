function solve (inputArray){
    let result= '';
 for (let index = 0; index < inputArray.length; index++) {
     if (index%2==0) {
         result= result + inputArray[index] + ' ';
     }
     
 }
 console.log(result);
}

solve(['20', '30', '40', '50','60'])