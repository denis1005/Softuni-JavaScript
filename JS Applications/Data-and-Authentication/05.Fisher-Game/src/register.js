let registerFormElement=document.querySelector('form');

registerFormElement.addEventListener('submit',(e)=>{
    e.preventDefault();

    let formData= new FormData(e.currentTarget);

    if(formData.get('password')!==formData.get('rePass')){
        alert('password does not match')
        registerFormElement.reset()
    }else{
        fetch(`http://localhost:3030/users/register`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                email:formData.get('email'),
                password:formData.get('password')
            })
        })
        .then(res=>res.json())
        .then(user=>{
            localStorage.setItem('_id', user._id);
            localStorage.setItem('username', user.email);
            localStorage.setItem('accessToken', user.accessToken);
            window.location.href="index.html";
        })
    }

    
})