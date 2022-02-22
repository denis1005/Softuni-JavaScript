function solve (number1, number2, number3){
    if(number1>number2&&number1>number3){
        console.log(`The largest number is ${number1}.`);
    }else if(number2>number1&&number2>number3){
        console.log(`The largest number is ${number2}.`);
    }else if(number3>number2&&number3>number1){
        console.log(`The largest number is ${number3}.`);
    }
   }

   solve(35, -3, 16);
   solve(-3, -5, -22.5);
