function attachEvents() {
    let nameElement=document.querySelector('[name="author"]')
    let messageElement=document.querySelector('[name="content"]')
    let sendButtonElement=document.getElementById('submit');
    let refreshButtonElement=document.getElementById('refresh');
    let messagesElement=document.getElementById('messages');

    const url='http://localhost:3030/jsonstore/messenger';

    sendButtonElement.addEventListener('click',(e)=>{
       e.preventDefault();
       let name=nameElement.value;
       let message=messageElement.value;

       fetch(url,{

        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            author:name,
            content:message,
        })
       })
       
       nameElement.value='';
       messageElement.value='';

    })
    refreshButtonElement.addEventListener('click',(e)=>{
        e.preventDefault();

        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            let result=[]
            Object.values(data).forEach(message=>{
                
                 result.push(`${message.author}: ${message.content}`)
                 
            })
            messagesElement.textContent=result.join('\n')

        })
    })
        
}

attachEvents();