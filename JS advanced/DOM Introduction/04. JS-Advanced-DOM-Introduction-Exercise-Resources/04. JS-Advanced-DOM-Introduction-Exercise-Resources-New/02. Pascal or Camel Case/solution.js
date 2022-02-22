function solve() {
  let getTextContent=document.getElementById("text").value;
  let getCase=document.getElementById("naming-convention").value;
  let getResulElement=document.getElementById('result');
  let result='';

  if(getCase=="Camel Case"){
   let tempMassive=getTextContent.split(' ').map(x=>x.toLowerCase());
   let firstElement=tempMassive[0];
   result=getTextContent.split(' ').map(x=>x.toLowerCase()).slice(1).map((x)=>x[0].toUpperCase()+x.slice(1)).join('');
   result=firstElement+result;
  }else if(getCase=="Pascal Case"){
    
    result=getTextContent.split(' ').map(x=>x.toLowerCase()).map(x=>x[0].toUpperCase()+x.slice(1)).join('');
  }else
  {
    result='Error!';
  }
  getResulElement.textContent=result;
}