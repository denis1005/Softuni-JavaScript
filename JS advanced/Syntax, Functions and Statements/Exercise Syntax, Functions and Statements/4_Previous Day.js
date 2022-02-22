function solve (setyear,setmonth,setdate){
    
    let givenDate= new Date(setyear,setmonth,setdate-1)

    if (setdate-1==0){
        givenDate.setDate(givenDate.getDate()-1);
    }
   
    //`{year}-{month}-{day}`
    console.log(`${givenDate.getFullYear()}-${givenDate.getMonth()}-${givenDate.getDate()}`);
}
solve(2016, 10, 1);