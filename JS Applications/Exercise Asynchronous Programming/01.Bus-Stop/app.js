function getInfo() {
    let buttonElement=document.getElementById('submit');
    let stopIdElement=document.getElementById('stopId');
    let stopNameElement=document.getElementById('stopName');
    let bussesElement=document.getElementById('buses');


    buttonElement.addEventListener('click',()=>{
       
        fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopIdElement.value}`)
        .then(res=>res.json())
        .then(data=>{
            stopNameElement.textContent=data.name;
            let arrayOfdataKeys=Object.keys(data.buses);
            for (const bus of arrayOfdataKeys) {
               let liElement=document.createElement('li');
               liElement.textContent=`Bus ${bus} arrives in ${data.buses[bus]} minutes`
               bussesElement.appendChild(liElement);
            }
            
        })
        .catch(err=>{
            stopNameElement.textContent='Error';
        })
        
    })
  
    

}