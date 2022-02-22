function attachEventsListeners() {
 let dayButtonElement= document.getElementById('daysBtn');
 let hoursButtonElement=document.getElementById('hoursBtn');
 let minutesButtonElement=document.getElementById('minutesBtn');
 let secondsButtonElement=document.getElementById('secondsBtn');

 let inputDayElement=document.getElementById('days');
 let inputHoursElement=document.getElementById('hours');
 let inputMinutesElement=document.getElementById('minutes');
 let inputSecondsElement=document.getElementById('seconds');

 dayButtonElement.addEventListener('click',()=>{
    inputHoursElement.value=Number(inputDayElement.value)*24
    inputMinutesElement.value=Number(inputDayElement.value)*1440
    inputSecondsElement.value=Number(inputDayElement.value)*86400 
 })

 hoursButtonElement.addEventListener('click',()=>{
    inputDayElement.value=Number(inputHoursElement.value)/24
    inputMinutesElement.value=Number(inputHoursElement.value)*60
    inputSecondsElement.value=Number(inputHoursElement.value)*3600

 })

 minutesButtonElement.addEventListener('click',()=>{
    inputDayElement.value=Number(inputMinutesElement.value)/1440
    inputHoursElement.value=Number(inputMinutesElement.value)/60
    inputSecondsElement.value=Number(inputMinutesElement.value)*60

 })
 secondsButtonElement.addEventListener('click',()=>{
    inputDayElement.value=Number(inputSecondsElement.value)/86400 
    inputHoursElement.value=Number(inputSecondsElement.value)/3600
    inputMinutesElement.value=Number(inputSecondsElement.value)/60

 })

}