function solve(arrayInput){
 let result= arrayInput.map((x=> x.sort((a,b)=>b-a)));
 let MaxNuder=0;

 for (let index = 0; index < result.length-1; index++) {
     if(result[index][0]>result[index+1][0]){
         MaxNuder=result[index][0];
     }else{MaxNuder=result[index+1][0];
    }
        
     
 }
 console.log(MaxNuder);
}
solve([[20, 50, 10],
    [8, 33, 145]]
   );