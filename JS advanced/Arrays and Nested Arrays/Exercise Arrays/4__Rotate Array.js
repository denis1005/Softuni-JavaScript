function solve (inputArray,numberOfRotations){

    for (let i = 0; i < numberOfRotations; i++) {
        let rotationNumber=0;
        rotationNumber=inputArray.pop();
        inputArray.unshift(rotationNumber);
        
    }

    console.log(inputArray.join(' '));

}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);