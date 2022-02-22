function addItem() {
    let inputTextElement=document.getElementById('newItemText');
    let inputValueElement=document.getElementById('newItemValue');
    let resultElement=document.getElementById('menu');

    let creatNewOption=document.createElement('option');
    creatNewOption.textContent=inputTextElement.value;
    creatNewOption.value=inputValueElement.value;
    resultElement.appendChild(creatNewOption);
    inputTextElement.value='';
    inputValueElement.value='';


}