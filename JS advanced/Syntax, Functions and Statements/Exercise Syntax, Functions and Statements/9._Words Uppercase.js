function solve (givenInput){
 let splitedArray= givenInput.match(/[A-Za-z]+/g);
 let resultArray= [];
 for (let i=0; i<=splitedArray.length-1; i++){
    resultArray.push(' '+ splitedArray[i]);
 }
 console.log(resultArray.toString().trim().toUpperCase());

}
solve('Hi, how are you?');