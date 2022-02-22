function solve (){

    let result={
        object:0,
        number:0,
        string:0,
        function:0,

    }
    
    for (const iterator of arguments) {
        if(typeof(iterator)=='object'){
            result.object++;
            console.log(`${typeof(iterator)}: ${iterator}`)
        }
        if(typeof(iterator)=='string'){
            result.string++;
            console.log(`${typeof(iterator)}: ${iterator}`)
        }
        if(typeof(iterator)=='number'){
            result.number++;
            console.log(`${typeof(iterator)}: ${iterator}`)
        }
        if(typeof(iterator)=='function'){
            result.function++;
            console.log(`${typeof(iterator)}: ${iterator}`)
        }
    }
    
    
    for (const key in result) {
        if(result[key]>0){
            console.log(`${key} = ${result[key]}`);
        }
    }

}
solve('cat', 42, function () { console.log('Hello world!'); });