function attachEvents() {
    let buttonElement=document.getElementById('submit');
    let searchedElement=document.getElementById('location');
    let forecastElement=document.getElementById('forecast');
    let currentConditionElement=document.getElementById('current');
    let upcomingConditionElement=document.getElementById('upcoming');

    buttonElement.addEventListener('click',()=>{
        fetch('http://localhost:3030/jsonstore/forecaster/locations')
        .then(result=>result.json())
        .then(data=>{
            let findElement=data.find(x=>x.name==searchedElement.value);
            if(findElement){
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${findElement.code}`)
                .then(result=>result.json())
                .then(data=>{
                    forecastElement.style.display='block';
                    let divForecastElement=document.createElement('div');
                    divForecastElement.classList.add('forecasts');
                    let spanConditionSymbol=document.createElement('span');
                    spanConditionSymbol.classList.add('symbol');
                    let spanCondition=document.createElement('span');
                    spanCondition.classList.add('conditions');

                    let spanName=document.createElement('span');
                    spanName.classList.add('forecast-data');
                    spanName.textContent=data.name;
                    spanCondition.appendChild(spanName);

                    let spanElementHighLow=document.createElement('span');
                    spanElementHighLow.classList.add('forecast-data');
                    spanElementHighLow.textContent=`${data.forecast.low}°/°${data.forecast.high}`
                    spanCondition.appendChild(spanElementHighLow);
                    

                    let spanElementCondition=document.createElement('span');
                    spanElementCondition.classList.add('forecast-data');
                    spanElementCondition.textContent=`${data.forecast.condition}`
                    spanCondition.appendChild(spanElementCondition);



                    if(data.forecast.condition=='Sunny'){
                       spanConditionSymbol.textContent='☀'
                    }else if(data.forecast.condition=='Rain'){
                        spanConditionSymbol.textContent='☂'
                    }

                    

                    divForecastElement.appendChild(spanConditionSymbol);
                    divForecastElement.appendChild(spanCondition);
                    currentConditionElement.appendChild(divForecastElement);
                })
                .catch(err=>{
                    forecastElement.style.display='block';
                    forecastElement.textContent='Error'
                })
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${findElement.code}`)
                .then(result=>result.json())
                .then(data=>{
                    let Conditions={
                        Sunny:'☀',
                        'Partly sunny':'⛅',
                        Overcast:'☁',
                        Rain:'☂',
                        Degrees:'°'
                    }
                    let divForecastInfo=document.createElement("div");
                    divForecastInfo.classList.add('forecast-info');
                    data.forecast.forEach(element=>{
                       let spanUpcoming=document.createElement('span');
                       spanUpcoming.classList.add('upcoming')

                       let spanSymbol=document.createElement('span');
                       spanSymbol.classList.add('symbol')
                       spanSymbol.textContent=Conditions[element.condition];

                       let spanHighLow=document.createElement('span');
                       spanHighLow.classList.add('forecast-data')
                       spanHighLow.textContent=`${element.low}°/${element.high}°`

                       let spanCondition=document.createElement('span');
                       spanCondition.classList.add('forecast-data');
                       spanCondition.textContent=`${element.condition}`;

                       spanUpcoming.appendChild(spanSymbol);
                       spanUpcoming.appendChild(spanHighLow);
                       spanUpcoming.appendChild(spanCondition);
                       divForecastInfo.appendChild(spanUpcoming);
                    })
                    upcomingConditionElement.appendChild(divForecastInfo);



                })
            }else{
                forecastElement.style.display='block';
                forecastElement.textContent='Error'
            }
        })
        .catch(err=>{
            forecastElement.style.display='block';
            
        })
    })
}

attachEvents();