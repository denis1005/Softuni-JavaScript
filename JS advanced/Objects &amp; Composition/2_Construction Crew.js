function solve(worker){
 let result = {
    weight:worker.weight,
    experience:worker.experience,


 };
 if(worker.dizziness){
     result.levelOfHydrated=((worker.weight*0.1)*worker.experience)+worker.levelOfHydrated;
     result.dizziness=false;
 }else{
    result.levelOfHydrated=worker.levelOfHydrated;
    result.dizziness=worker.dizziness;
 }
 return result;
}

let result= solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );

console.log(result);
      
  