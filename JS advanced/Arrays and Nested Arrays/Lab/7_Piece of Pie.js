function solve (inputArray,firstTargetFlavor, secondTargetFlavor){
  let result= inputArray.slice(inputArray.indexOf(firstTargetFlavor),inputArray.indexOf(secondTargetFlavor)+1);
  return result
}

let test= solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);

console.log(test);