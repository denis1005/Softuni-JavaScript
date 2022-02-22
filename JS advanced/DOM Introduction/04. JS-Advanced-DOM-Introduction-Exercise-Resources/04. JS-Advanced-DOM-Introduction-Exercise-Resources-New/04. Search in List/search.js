function search() {
   let elements=document.querySelectorAll('ul#towns li');
   let resultElement=document.getElementById('result');
   let surchedElement=document.getElementById('searchText').value;
   let arrayOfElements=Array.from(elements);
   let count=0;
   for (const iterator of arrayOfElements) {
      iterator.style.textDecoration='none';
      iterator.style.fontWeight='normal';
   }
   if(surchedElement!=''){
   for (const iterator of arrayOfElements) {
      if(iterator.textContent.search(surchedElement)!=-1){
        count++;
        iterator.style.textDecoration='underline';
        iterator.style.fontWeight='bold';
      }
   }
}
   resultElement.textContent= `${count} matches found`
}
