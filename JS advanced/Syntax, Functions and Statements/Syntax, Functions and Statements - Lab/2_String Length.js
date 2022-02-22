function solve (inputString1,inputString2,inputString3){
    let lenghtInput1=inputString1.length;
    let lenghtInput2=inputString2.length;
    let lenghtInput3=inputString3.length;
    let sum=lenghtInput1+lenghtInput2+lenghtInput3;
    let avg= Math.floor(sum/3);
    console.log(sum);
    console.log(avg);
   }

   solve('chocolate', 'ice cream', 'cake');