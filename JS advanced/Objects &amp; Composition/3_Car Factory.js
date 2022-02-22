function solve (input){
 let result= {
    model:input.model,
    engine:{},
    carriage:{
        type:input.carriage,
        color:input.color,
    },
    wheels:[0,0,0,0],
 };
switch(input.power!=0){
    case input.power<=90:
        result.engine.power=90;
        result.engine.volume=1800;
    break;
    case input.power<=120:
        result.engine.power=120;
        result.engine.volume=2400;
    break;
    case input.power<=200:
        result.engine.power=200;
        result.engine.volume=3500;
    break;
}
if (input.wheelsize%2==0) {
    result.wheels.fill(input.wheelsize-1);
}else{
    result.wheels.fill(input.wheelsize);
}
return result
}

let result=solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);
console.log(result);