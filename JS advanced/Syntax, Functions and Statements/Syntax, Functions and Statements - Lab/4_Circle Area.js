function solve (testInput){
    if (typeof(testInput)=='number'){
        let result= (Math.PI*testInput**2).toFixed(2)
        console.log(result);
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(testInput)}.`);
    }
   }
   
   solve('name');