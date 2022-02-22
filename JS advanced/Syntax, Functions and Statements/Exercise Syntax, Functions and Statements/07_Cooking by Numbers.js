function solve (GivenNumber, command1,command2,command3,command4,command5){
 let commands = [command1,command2,command3,command4,command5];
 let GivenNumberParrsed= Number(GivenNumber);
 for (let i=0;i<=commands.length;i++){
    switch (commands[i]){
        case 'chop':
            GivenNumberParrsed=GivenNumberParrsed/2;
            console.log(GivenNumberParrsed);
        break;
        case 'dice':
            GivenNumberParrsed=Math.sqrt(GivenNumberParrsed);
            console.log(GivenNumberParrsed);
        break;
        case 'spice':
            GivenNumberParrsed=GivenNumberParrsed+1;
            console.log(GivenNumberParrsed);
        break;
        case 'bake':
            GivenNumberParrsed=GivenNumberParrsed*3;
            console.log(GivenNumberParrsed);
        break;
        case 'fillet':
            GivenNumberParrsed=GivenNumberParrsed-(GivenNumberParrsed*0.2);
            console.log(GivenNumberParrsed);
        break;
    }
 }

}
solve(9,'dice','spice','chop','bake','fillet');