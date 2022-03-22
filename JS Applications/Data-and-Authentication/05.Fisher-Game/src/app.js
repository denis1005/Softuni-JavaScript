let username = localStorage.getItem('username');
let divBarGuest=document.getElementById('guest');
let spanElement=document.querySelector('.email');
let logOutButtonElement=document.getElementById('logout');

if(username){
    divBarGuest.remove();
    spanElement.innerHTML=`<p class="email">Welcome, <span>${username}</span></p>`
    
}

logOutButtonElement.addEventListener('click',(e)=>{
   e.preventDefault();
   fetch(logOutButtonElement,{
       method:'GET',
       headers:{
        'content-type': 'application/json',
         'X-Authorization': localStorage.getItem('accessToken')
       }
   })
   localStorage.clear();
   window.location.href="login.html";
})

