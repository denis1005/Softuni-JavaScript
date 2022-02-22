function solve() {
  let getTextElement= document.getElementById("input").value;
  let getResultElement=document.getElementById("output");
  let ArrayOfTextElements=getTextElement.split('. ');
  let TempText='';
 
  for (let index = 0; index < ArrayOfTextElements.length; index++) {
    
    if (index%3==0) {
      let appendChild=document.createElement("p");
      appendChild.textContent=TempText;
      getResultElement.appendChild(appendChild);
      TempText='';
    }
    if(index+1==ArrayOfTextElements.length){
      TempText=TempText+ArrayOfTextElements[index];
      let appendChild=document.createElement("p");
      appendChild.textContent=TempText;
      getResultElement.appendChild(appendChild);
      TempText='';
    }
    TempText=TempText+ArrayOfTextElements[index]+'. ';
    
  }

}