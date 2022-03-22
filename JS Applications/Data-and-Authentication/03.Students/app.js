const url='http://localhost:3030/jsonstore/collections/students'
const resultsElement=document.querySelector('tbody');
const formElement=document.getElementById('form');

window.addEventListener('load',  () => {
   //th

   fetch(url)
   .then(res=>res.json())
   .then(data=>{
     Object.values(data).forEach(info=>{
        let trElement=document.createElement('tr')
        trElement.innerHTML=`
        <td>${info.firstName}</td>
        <td>${info.lastName}</td>
        <td>${info.facultyNumber}</td>
        <td>${info.grade}</td>
        `
        resultsElement.appendChild(trElement);

     })
   })

})

formElement.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    fetch(url,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({
            firstName:formData.get('firstName'),
            lastName:formData.get('lastName'),
            facultyNumber:formData.get('facultyNumber'),
            grade:formData.get('grade'),

        })

        
    })
    location.reload();
})

