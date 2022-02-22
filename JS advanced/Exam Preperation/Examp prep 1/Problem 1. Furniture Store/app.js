window.addEventListener('load', solve);

function solve() {
    let modelElement=document.getElementById('model');
    let yearElement=document.getElementById('year');
    let descriptionElement=document.getElementById('description');
    let priceElement=document.getElementById('price');
    let addButtonElement=document.getElementById('add');
    let furnitureListElement=document.getElementById('furniture-list');
    let totalElement=document.getElementsByClassName('total-price')[0];

   

    addButtonElement.addEventListener('click',(e)=>{
      e.preventDefault();

        if(Number(priceElement.value)>0 && modelElement.value.length>0 && Number(yearElement.value)>0 && descriptionElement.value.length>0 ){
        let creatNewTrElement=document.createElement('tr');
        let creatNerTDforModel=document.createElement('td');
        let creatNerTDforPrice=document.createElement('td');
        let creatButtonElementMoreInfo=document.createElement('button');
        let creatButtonElementBuyIt=document.createElement('button');
        let creatNewTrElementHiden=document.createElement('tr');
        let creatNewTDforYearElement=document.createElement('td');
        let creatNewTDforDescriptionElement=document.createElement('td');
  
        creatNerTDforModel.textContent=modelElement.value;
        creatNerTDforPrice.textContent=Number(priceElement.value).toFixed(2);
        creatButtonElementMoreInfo.textContent='More information';
        creatButtonElementBuyIt.textContent='Buy it';
        creatButtonElementMoreInfo.classList='moreBtn'
        creatButtonElementBuyIt.classList='buyBtn';
        creatNewTDforYearElement.textContent=yearElement.value;
        creatNewTDforDescriptionElement.textContent=descriptionElement.value;
        creatNewTDforDescriptionElement.style.colSpan ='3';
        creatNewTrElementHiden.classList='hide';
        creatNewTrElementHiden.style.display='none'

        
        creatNewTrElement.appendChild(creatNerTDforModel);
        creatNewTrElement.appendChild(creatNerTDforPrice);
        creatNewTrElement.appendChild(creatButtonElementMoreInfo);
        creatNewTrElement.appendChild(creatButtonElementBuyIt);
        furnitureListElement.appendChild(creatNewTrElement);
        creatNewTrElementHiden.appendChild(creatNewTDforYearElement);
        creatNewTrElementHiden.appendChild(creatNewTDforDescriptionElement);
        furnitureListElement.appendChild(creatNewTrElementHiden);


        modelElement.value='';
        yearElement.value='';
        descriptionElement.value='';
        priceElement.value='';


        }

        let buttonElementsMoreInfo=document.getElementsByClassName('moreBtn');
        let buttonElementsArray=Array.from(buttonElementsMoreInfo);
        let buttonElementsBuyButton=document.getElementsByClassName('buyBtn');
        let buttonElementsBuyButtonArray=Array.from(buttonElementsBuyButton);

     for (const button of buttonElementsArray) {
            
            
            button.addEventListener('click',(e)=>{
         
                if(e.currentTarget.textContent=='More information'){
                    e.currentTarget.parentNode.parentNode.childNodes[2].style.display='contents';
                    e.currentTarget.textContent='Less Info';
    
                }else{
                    e.currentTarget.parentNode.parentNode.childNodes[2].style.display='none';
                    e.currentTarget.textContent='More information';
                }
       
            })
            
        }

        for (const button of buttonElementsBuyButtonArray) {
            
            
            button.addEventListener('click',(e)=>{
               totalElement.textContent=Number(e.currentTarget.parentNode.childNodes[1].textContent)
               e.currentTarget.parentNode.remove();
       
            })
            
        }



       
 
     
    })
     
      


}
