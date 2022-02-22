function solve (steps,footprint,studentSpeed){
  let sInKm= (steps*footprint)/1000;
  let breaks=0;
  let timeForCrosing=0;
  
  for (let i=steps; i>0;i=i-500){
      breaks++;
  }
timeForCrosing=((sInKm/studentSpeed));
console.log(breaks);
console.log(timeForCrosing);
}

solve(4000, 0.60, 5);