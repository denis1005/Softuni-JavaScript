function toggle() {
    let getButtonText=document.getElementsByClassName("button")[0];
    let getHidenText=document.getElementById("extra");

    if(getHidenText.style.display=='none'){
        getButtonText.textContent="Less";
        getHidenText.style.display='block';
    }else{
        getButtonText.textContent="More";
        getHidenText.style.display='none';
    }
    
}