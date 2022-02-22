function solve (speed, area){
 let motorwayLimit=130;
 let interstateLimit=90;
 let cityLimit=50;
 let residentialLimit=20;
 let status='';

 switch (area){
     case 'motorway':
         if (130-speed>=0){
           console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
         }
         else if(speed-130<=20){
           status='speeding';
           console.log(`The speed is ${speed-130} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
         }
         else if(speed-130<=40){
            status='excessive speeding';
            console.log(`The speed is ${speed-130} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
          }else{
            status='reckless driving';
            console.log(`The speed is ${speed-130} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
          }
            
         break;

     case 'interstate':
        if (interstateLimit-speed>=0){
            console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
          }
          else if(speed-interstateLimit<=20){
            status='speeding';
            console.log(`The speed is ${speed-interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
          }
          else if(speed-interstateLimit<=40){
             status='excessive speeding';
             console.log(`The speed is ${speed-interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
           }else{
             status='reckless driving';
             console.log(`The speed is ${speed-interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
           }
        
          break;

     case 'city':
        if (cityLimit-speed>=0){
            console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
          }
          else if(speed-cityLimit<=20){
            status='speeding';
            console.log(`The speed is ${speed-cityLimit} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
          }
          else if(speed-cityLimit<=40){
             status='excessive speeding';
             console.log(`The speed is ${speed-cityLimit} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
           }else{
             status='reckless driving';
             console.log(`The speed is ${speed-cityLimit} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
           }
        
          break;

    case 'residential':
        if (residentialLimit-speed>=0){
            console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
          }
          else if(speed-residentialLimit<=20){
            status='speeding';
            console.log(`The speed is ${speed-residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
          }
          else if(speed-residentialLimit<=40){
             status='excessive speeding';
             console.log(`The speed is ${speed-residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
           }else{
             status='reckless driving';
             console.log(`The speed is ${speed-residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
           }
        
          break;
 }

}
solve (21,'residential');

