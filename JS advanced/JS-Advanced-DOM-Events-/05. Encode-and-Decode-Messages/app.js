function encodeAndDecodeMessages() {
    //charCodeAt()
    //String.fromCharCode

    let messageElements=document.querySelectorAll('textarea');
    let buttonElements=document.querySelectorAll('button');
    
    
    buttonElements[0].addEventListener("click",()=>{
        messageElements[1].value=messageElements[0].value.split('').map(x=>x.charCodeAt()+1).map(x=>String.fromCharCode(x)).join('');
        messageElements[0].value='';
    })

    buttonElements[1].addEventListener("click",()=>{
        messageElements[1].value=messageElements[1].value.split('').map(x=>x.charCodeAt()-1).map(x=>String.fromCharCode(x)).join('');
    })

   
}