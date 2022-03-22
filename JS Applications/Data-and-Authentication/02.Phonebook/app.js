function attachEvents() {
    let btnLoad=document.getElementById('btnLoad');
    let phoneBookElement=document.getElementById('phonebook');
    let personElement= document.getElementById('person');
    let phoneElement=document.getElementById('phone');
    let btnCreateElement=document.getElementById('btnCreate');


    const url='http://localhost:3030/jsonstore/phonebook';
    
    btnLoad.addEventListener('click',(e)=>{
       e.preventDefault();
       fetch(url)
       .then(res=>res.json())
       .then(data=>{
           phoneBookElement.innerHTML='';
           Object.values(data).forEach(phonebook=>{
               let liElement=document.createElement('li');
               liElement.textContent=`${phonebook.person}: ${phonebook.phone}`

               let deleteButton=document.createElement('button');
               deleteButton.textContent='Delete';
               deleteButton.addEventListener('click',(e)=>{
                   e.preventDefault();
                   fetch(`http://localhost:3030/jsonstore/phonebook/${phonebook._id}`,{
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                   })
                   liElement.remove();

               })
               
               liElement.appendChild(deleteButton)
               phoneBookElement.appendChild(liElement)
               

           })
       })
    })

    btnCreateElement.addEventListener('click',()=>{
        fetch(url,{
            method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        person:personElement.value,
                        phone:phoneElement.value,
                    })
        })
        personElement.value='';
        phoneElement.value='';
    })


}

attachEvents();