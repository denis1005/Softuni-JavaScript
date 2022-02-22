function solve() {
    let firstNameElement=document.getElementById('fname');
    let lastNameElement=document.getElementById('lname');
    let emailElement=document.getElementById('email');
    let birthElement=document.getElementById('birth');
    let positionElement=document.getElementById('position');
    let salaryElement=document.getElementById('salary');
    let hireNButtonElement=document.getElementById('add-worker');
    let tbodyElement=document.getElementById('tbody');
    let sumElement=document.getElementById('sum');
    let buttonElementforEdit=document.querySelector('.edit');

    hireNButtonElement.addEventListener('click',(e)=>{
        e.preventDefault();
        firstName=firstNameElement.value;
        lastName=lastNameElement.value;
        email=emailElement.value;
        birth=birthElement.value;
        position=positionElement.value;
        salary=salaryElement.value;

        if(!firstName || !lastName || !email || !birth || !position || !salary ){
            return;
        }

        let trElement=document.createElement('tr')

        let firstNameTdElement=document.createElement('td')
        firstNameTdElement.textContent=firstName;

        let lastNameTdElement=document.createElement('td')
        lastNameTdElement.textContent=lastName;

        let emailTdElement=document.createElement('td')
        emailTdElement.textContent=email;

        let birthTdElement=document.createElement('td')
        birthTdElement.textContent=birth;

        let positionTdElement=document.createElement('td')
        positionTdElement.textContent=position;

        let salaryTdElement=document.createElement('td')
        salaryTdElement.textContent=salary;

        let fireButtonElement=document.createElement('button')
        fireButtonElement.classList.add('fired')
        fireButtonElement.addEventListener('click',()=>{
            
                sumElement.textContent=(Number(sumElement.textContent)-currentSum).toFixed(2)
            
            
            trElement.remove();
        })
        fireButtonElement.textContent='Fired'

        let editButtonElement=document.createElement('button')
        editButtonElement.classList.add('edit')
        editButtonElement.addEventListener('click',()=>{
            firstNameElement.value=firstName;
            lastNameElement.value=lastName;
            emailElement.value=email;
            birthElement.value=birth;
            positionElement.value=position;
            salaryElement.value=salary;
            if(currentSum-Number(sumElement.textContent)<=0){
                sumElement.textContent='0.00'
            }else{
                sumElement.textContent=(Number(sumElement.textContent)-currentSum).toFixed(2)
            }
            trElement.remove();
        })

        editButtonElement.textContent='Edit'

        let ButtonsFiredandHiredTdElement=document.createElement('td');
        ButtonsFiredandHiredTdElement.appendChild(fireButtonElement);
        ButtonsFiredandHiredTdElement.appendChild(editButtonElement);

        trElement.appendChild(firstNameTdElement);
        trElement.appendChild(lastNameTdElement);
        trElement.appendChild(emailTdElement);
        trElement.appendChild(birthTdElement);
        trElement.appendChild(positionTdElement);
        trElement.appendChild(salaryTdElement);
        trElement.appendChild(ButtonsFiredandHiredTdElement);

        tbodyElement.appendChild(trElement);
        let currentSum=Number(salary)
        sumElement.textContent=(currentSum+Number(sumElement.textContent)).toFixed(2);

        firstNameElement.value='';
        lastNameElement.value='';
        emailElement.value='';
        birthElement.value='';
        positionElement.value='';
        salaryElement.value='';

       
        

    })

}
solve()