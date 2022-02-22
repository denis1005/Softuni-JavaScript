function solve (initialInput){
    let problemInput= initialInput;
    let sumOfElements=0;
    let sumOfTheInverse=0;
    let Concaket='';
    for (let i = 0; i < problemInput.length; i++) {
        sumOfElements+=problemInput[i];
        
    }
    for (let i = 0; i < problemInput.length; i++) {
        let temp= 1 / problemInput[i];
        sumOfTheInverse=sumOfTheInverse+temp;
        
    }
    for (let i = 0; i < problemInput.length; i++) {
        Concaket+=String(problemInput[i]);
        
    }
    console.log(sumOfElements);
    console.log(sumOfTheInverse);
    console.log(Concaket);
  }
  solve([1, 2, 3]);