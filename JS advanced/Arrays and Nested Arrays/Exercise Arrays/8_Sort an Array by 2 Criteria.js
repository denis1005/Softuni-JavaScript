function solve(inputArray){
let sortedArray=(inputArray.sort((a, b) => a.length-b.length)).sort((a,b)=>{
    if(a.length==b.length){
    return a.localeCompare(b);
    }
})
for (const element of sortedArray) {
    console.log(element)
}
}

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

)