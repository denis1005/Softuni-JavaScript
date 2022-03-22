const tbodyElement=document.querySelector('tbody');
const formElement=document.querySelector('form');
const loadBooks=document.getElementById('loadBooks');
const url='http://localhost:3030/jsonstore/collections/books';

loadBooks.addEventListener('click',(e)=>{
  e.preventDefault();
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    tbodyElement.innerHTML='';
    

    Object.values(data).forEach(info=>{
        let trElement=document.createElement('tr');
        let tdAuthor=document.createElement('td');
        tdAuthor.textContent=info.author;
        
        let tdTitle=document.createElement('td');
        tdTitle.textContent=info.title;

        let tdButtons=document.createElement('td');
        let editButtonElement=document.createElement('button');
        editButtonElement.textContent='Edit'
        editButtonElement.addEventListener('click',()=>{
          formElement.innerHTML='';
          formElement.innerHTML=` <h3>Edit FORM</h3>
          <label>TITLE</label>
          <input type="text" name="title" placeholder=placeholder="Title..." value=${tdTitle.textContent}>
          <label>AUTHOR</label>
          <input type="text" name="author" placeholder="Author..." value=${tdTitle.textContent} >
          <button>Save</button>`

          formElement.addEventListener('submit',(e)=>{
            e.preventDefault();
          
            let formData= new FormData(e.currentTarget);
            
            fetch(`http://localhost:3030/jsonstore/collections/books${data._id}`,{
              method:'PUT',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify({
                author:formData.get('author'),
                title:formData.get('title'),
              })
            })
            e.currentTarget.reset();
            formElement.innerHTML=` <h3>FORM</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author...">
            <button>Submit</button>`
          
          })

        })

        let deleteButtonElement=document.createElement('button');
        deleteButtonElement.textContent='Delete'
        deleteButtonElement.addEventListener('click',()=>{
          fetch(`http://localhost:3030/jsonstore/collections/books/${info._id}`,{
            method:'DELETE',
            headers:{
              'content-type':'application/json'
            }
          })
          .catch(err=>{
            trElement.remove();
          })
          trElement.remove();
        })
        
        tdButtons.appendChild(editButtonElement);
        tdButtons.appendChild(deleteButtonElement);
        trElement.appendChild(tdTitle);
        trElement.appendChild(tdAuthor)
        trElement.appendChild(tdButtons)
        tbodyElement.appendChild(trElement);


    })

  })
  
})

formElement.addEventListener('submit',(e)=>{
  e.preventDefault();

  let formData= new FormData(e.currentTarget);
  
  fetch(url,{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({
      author:formData.get('author'),
      title:formData.get('title'),
    })
  })
  e.currentTarget.reset();

})