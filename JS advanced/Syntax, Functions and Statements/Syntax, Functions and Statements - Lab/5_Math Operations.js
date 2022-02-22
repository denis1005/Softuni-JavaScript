function solve (number1,number2,operation){
    let ;
    switch (operation){
        case '+': result= number1+number2; break;
        case '-': result= number1-number2; break;
        case '*': result= number1*number2; break;
        case '/': result= number1/number2; break;
        case '%': result= number1%number2; break;
        case '**':result= number1**number2; break;
    }
    console.log(result)
   }