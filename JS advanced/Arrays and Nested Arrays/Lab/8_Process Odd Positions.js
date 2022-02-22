function solve (arrayInput){
  let result=arrayInput.filter((element,i)=> i % 2!==0)
  .map(x=>x*2)
  .reverse();

  for (const results of result) {
      console.log(results);
  }
}

solve([10, 15, 20, 25]);