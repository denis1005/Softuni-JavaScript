function solve() {
 const infoElement=document.getElementById('info');
 let exampleInput='1567';
 let nextStop=0;
 const departButtonElement=document.getElementById('depart');
 const arriveButtonElement=document.getElementById('arrive');

    function depart() {
        
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${exampleInput}`)
        .then(res=>res.json())
        .then(data=>{
            nextStop=data.next
            console.log(nextStop)
            fetch(`http://localhost:3030/jsonstore/bus/schedule/${data.next}`)
            .then(res=>res.json())
            .then(dataNext=>{
                infoElement.textContent=`Next Stop ${dataNext.name}`
                departButtonElement.disabled=true;
                arriveButtonElement.disabled=false;
                
                
            })
            .catch(err=>{
                departButtonElement.disabled=false;
                arriveButtonElement.disabled=false;
            })

        })
        .catch(err=>{
            departButtonElement.disabled=false;
            arriveButtonElement.disabled=false;
        })
    }

    function arrive() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStop}`)
        .then(res=>res.json())
        .then(data=>{
            infoElement.textContent=`Arraying at ${data.name}`
            departButtonElement.disabled=false;
            arriveButtonElement.disabled=true;
            exampleInput=nextStop;
        })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();