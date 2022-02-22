function getFibonator(){
    let number=1;
    let lastNumber=0;
    let tempCount=0;

    return function (){
     
     
     if (tempCount>=2){
         lastNumber=number-lastNumber;
         number=lastNumber+number;

     }else{
        number=number+lastNumber;
        tempCount++
     }
     return number;
    }

    
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
