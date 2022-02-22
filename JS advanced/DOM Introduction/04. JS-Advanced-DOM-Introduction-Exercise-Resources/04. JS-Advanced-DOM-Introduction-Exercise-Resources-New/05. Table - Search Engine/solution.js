function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
    let surchedElement=document.getElementById('searchField').value;
    


   function onClick() {
      let elements=document.getElementsByTagName('tr');
      let arrayOfElements=Array.from(elements);
      let surchedElement=document.getElementById('searchField').value;
      // arrayOfElements.shift();
      // arrayOfElements.shift();

      for (const iterator of arrayOfElements) {
         iterator.classList.remove("select");
      }
      for (const iterator of arrayOfElements) {
         if (iterator.textContent.search(surchedElement)!=-1) {
            iterator.classList.add("select");
         }
         console.log(iterator.textContent);
         console.log(typeof iterator.textContent)
      }
      
   }
}