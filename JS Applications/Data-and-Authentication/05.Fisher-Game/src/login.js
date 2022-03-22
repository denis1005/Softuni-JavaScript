const loginFormElement=document.querySelector('form');
const url=`http://localhost:3030/users/login`
loginFormElement.addEventListener('submit',(e)=>{
    console.log('hi')
    e.preventDefault();
    let formData= new FormData(e.currentTarget);
    
    fetch(url,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({
            email:formData.get('email'),
            password:formData.get('password')
        })
    })
    .then(res => res.json())
                .then(user => {
                    localStorage.setItem('_id', user._id);
                    localStorage.setItem('username', user.email);
                    localStorage.setItem('accessToken', user.accessToken);
                    window.location.href="index.html";
                }) 
})
