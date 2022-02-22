window.addEventListener('load', solution);

function solution() {
  let fullNameElement=document.getElementById('fname');
  let emailElement=document.getElementById('email');
  let phoneElement=document.getElementById('phone');
  let addressElement=document.getElementById('address');
  let codeElement=document.getElementById('code');
  let submitButtonElement=document.getElementById('submitBTN');
  let editButtonElement=document.getElementById('editBTN');
  let ContinueButtonElement=document.getElementById('continueBTN');
  let infoPreviewElement=document.getElementById('infoPreview');
  let divBlockElement=document.getElementById('block');


  submitButtonElement.addEventListener('click',(e)=>{
   let fullName=fullNameElement.value;
   let email=emailElement.value;
   let phone=phoneElement.value;
   let address=addressElement.value;
   let code=codeElement.value;

   if(fullName.length>0 && email.length>0){
     

      let fullNameLiElement=document.createElement('li');
      fullNameLiElement.textContent=`Full Name: ${fullName}`

      let emailLiElement=document.createElement('li');
      emailLiElement.textContent=`Email: ${email}`

      let phoneLiElement=document.createElement('li');
      phoneLiElement.textContent=`Phone Number: ${phone}`

      let addressLiElement=document.createElement('li');
      addressLiElement.textContent=`Address: ${address}`

      let codeLiElement=document.createElement('li');
      codeLiElement.textContent=`Postal Code: ${code}`

      infoPreviewElement.appendChild(fullNameLiElement);
      infoPreviewElement.appendChild(emailLiElement);
      infoPreviewElement.appendChild(phoneLiElement);
      infoPreviewElement.appendChild(addressLiElement);
      infoPreviewElement.appendChild(codeLiElement);
      
      e.currentTarget.disabled=true;
      fullNameElement.value='';
      emailElement.value='';
      phoneElement.value='';
      addressElement.value='';
      codeElement.value='';
      ContinueButtonElement.disabled=false;
      editButtonElement.disabled=false;


      editButtonElement.addEventListener('click',()=>{
        fullNameElement.value=fullName;
        emailElement.value=email;
        phoneElement.value=phone;
        addressElement.value=address;
        codeElement.value=code;

        infoPreviewElement.removeChild(fullNameLiElement);
        infoPreviewElement.removeChild(emailLiElement);
        infoPreviewElement.removeChild(phoneLiElement);
        infoPreviewElement.removeChild(addressLiElement);
        infoPreviewElement.removeChild(codeLiElement);

        ContinueButtonElement.disabled=true;
        editButtonElement.disabled=true;
        submitButtonElement.disabled=false;
      })

      ContinueButtonElement.addEventListener('click',()=>{
        divBlockElement.innerHTML = ''
        let hElement=document.createElement('h3');
        hElement.textContent="Thank you for your reservation!"
        divBlockElement.appendChild(hElement);

      })

    
      
   }

  })

}
