function solve() {
  let textAreaElements=document.querySelectorAll('textarea');
  let buttonElements=document.querySelectorAll('button');
  let tableElement=document.querySelector('table.table');
  let parsedElementsArray=JSON.Parse(textAreaElements[0].value);

  buttonElements[0].addEventListener('click',()=>{
    // for (const iterator in parsedElementsArray) {
    //   let creatNewTr=document.createElement('tr');
    //   for (const key in iterator) {
    //    let creatNeTd=document.createElement('td');
    //    creatNeTd.textContent=iterator.key;
    //    console.log(iterator.key);
    //    creatNewTr.appendChild(creatNeTd);
    //   }
    //   tableElement.appendChild(creatNewTr);
    // }
    console.log('hi');
  })



}