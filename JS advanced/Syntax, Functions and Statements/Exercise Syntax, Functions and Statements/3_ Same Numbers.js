function solve(number){
  let check=  Array.from(String(number), Number);;
  let sumOfNumbers=0;
  let result=false;
  for (let i=0;i<check.length;i++){
    sumOfNumbers=sumOfNumbers + parseInt(check[i]);
      if (parseInt(check[i])==parseInt(check[i+1])){
          result=true;
      }

  }
  console.log(result);
  console.log(sumOfNumbers);
}
solve(1123);  