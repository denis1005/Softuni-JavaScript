function create(words) {
   let contentElement=document.getElementById('content');
   for (const iterator of words) {
      let divElement=document.createElement('div');
      let paragraphElement=document.createElement('p');
      paragraphElement.textContent=iterator;
      paragraphElement.style.display="none";
      divElement.appendChild(paragraphElement);
      divElement.addEventListener('click',(e)=>{
         e.currentTarget.firstChild.style='visible';
      })
      contentElement.appendChild(divElement)
   }
}