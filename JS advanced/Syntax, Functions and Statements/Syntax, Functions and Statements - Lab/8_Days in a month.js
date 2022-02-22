function solve (month,year){
       let dateResult= new Date(year, month, 0).getDate();
       console.log(dateResult);
}
solve(1, 2012);