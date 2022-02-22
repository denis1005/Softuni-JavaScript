function solve(inputArray){
let sortedArray=inputArray.sort((a, b) => a.localeCompare(b));
for (const item of sortedArray) {

    console.log(`${sortedArray.indexOf(item)+1}.${item}`)
}
}

solve(["John", "Bob", "Christina", "Ema"]);