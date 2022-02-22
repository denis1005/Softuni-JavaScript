function lockedProfile() {
    let buttonElements=document.querySelectorAll('button');
    let arrayFromButtons=Array.from(buttonElements);

    

    arrayFromButtons.forEach(button => {
        button.addEventListener('click', (e)=>{

            if (e.currentTarget.parentNode.children[4].checked) {
                if(e.currentTarget.parentNode.children[9].style.display=='block'){
                    e.currentTarget.parentNode.children[9].style.display='none';
                    e.currentTarget.textContent='Show more'
                }else{
                    e.currentTarget.parentNode.children[9].style.display='block';
                    e.currentTarget.textContent='Hide it'
                }
            }

        })
    });
}