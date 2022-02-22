function solve(commandsForTheGame){

    let XtakenPlace=true;


    // Function for Matrix print
    function printMatrix(givenMatrix){

        console.log(givenMatrix.map(x => x.join("\t")).join("\n"))
    }


    // Function for checking if X wins the game.
    function CheckIfXWins(matrix){
      
       let result= false;
       let counterFirstDiagonal=1;
       let counterSecondDiagonal=1;
       
       // Checking for row wins for X
       for (const elements of matrix) {
           if(elements.join('')=='XXX'){
               result=true;
           }
       }

       // Checking for colons win for X

       for (let i = 0; i < matrix.length; i++) {
        let counter=1;
        for (let j = 0; j < matrix.length-1; j++) {
            if(matrix[j][i]=='X'){
                if(matrix[j+1][i]==matrix[j][i]){
                  counter++;
                }
            }else{
                break;
            }
            
        }
        if(counter==3){
            result=true;
            break;
        }
    
    }

    // Check For X win diagonals

    for (let i = 0; i < matrix.length-1; i++) {
    
        if (matrix[i][i]=='X'){
            if(matrix[i][i]==matrix[i+1][i+1]){
                counterFirstDiagonal++;
            }
        
        }
        if(matrix[i][matrix.length-1-i]=='X'){
            if(matrix[i][matrix.length-1-i]==matrix[i+1][matrix.length-2-i]){
                counterSecondDiagonal++;
            }
        }
    
        
    
        if(counterFirstDiagonal==3 ){
            result=true;
            break;
        }
        if(counterSecondDiagonal==3){
            result=true;
            break;
        }
        
    }
    


      return result;
    }
    

    // Check if O wins
     function CheckIfOWins(matrix){
      
        let result= false;
        let counterFirstDiagonal=1;
        let counterSecondDiagonal=1;
        
        // Checking for row wins for 0
        for (const elements of matrix) {
            if(elements.join('')=='OOO'){
                result=true;
            }
        }
 
        // Checking for colons win for O
 
        for (let i = 0; i < matrix.length; i++) {
         let counter=1;
         for (let j = 0; j < matrix.length-1; j++) {
             if(matrix[j][i]=='O'){
                 if(matrix[j+1][i]==matrix[j][i]){
                   counter++;
                 }
             }else{
                 break;
             }
             
         }
         if(counter==3){
             result=true;
             break;
         }
     
     }
 
     // Check For O win diagonals
 
     for (let i = 0; i < matrix.length-1; i++) {
     
         if (matrix[i][i]=='O'){
             if(matrix[i][i]==matrix[i+1][i+1]){
                 counterFirstDiagonal++;
             }
            
         }
         if(matrix[i][matrix.length-1-i]=='O'){
            if(matrix[i][matrix.length-1-i]==matrix[i+1][matrix.length-2-i]){
                counterSecondDiagonal++;
            }
        }
     
         
     
         if(counterFirstDiagonal==3 || counterSecondDiagonal==3){
             result=true;
             break;
         }
         
     }
     
 
 
       return result;
     }

     // Check If No one Wins

     function CheckIfNoOneWins(givenMatrix){
         let counter=0;
         let result=false;
         for (let i = 0; i < givenMatrix.length; i++) {
             for (let j = 0; j < givenMatrix.length; j++) {
                 if(givenMatrix[i][j]==false){
                   counter++
                 }
                 
             }
             
         }

         if (counter==0){
             result=true;
         }
         return result
     }

let matrix=[[false, false, false],
    [false, false, false],
    [false, false, false]]

for (let i = 0; i < commandsForTheGame.length; i++) {
    let commandsForTheGameSplitted=commandsForTheGame[i].split(' ');
    let coordinateOne=Number(commandsForTheGameSplitted[0]);
    let coordinateTwo=Number(commandsForTheGameSplitted[1]);
       
    // IF X wins

    if(CheckIfXWins(matrix)){
        console.log("Player X wins!")
        printMatrix(matrix)
        break;
    }
    
    //IF O Wins

    if(CheckIfOWins(matrix)){
        console.log("Player O wins!")
        printMatrix(matrix)
        break;
    }

    //If NoOneWins

    if(CheckIfNoOneWins(matrix)){
        console.log("The game ended! Nobody wins :(");
        printMatrix(matrix)
        break;
    }

    //Game 
    //Commands for Player X normal:

    
        if(XtakenPlace){
        
            if(matrix[coordinateOne][coordinateTwo]!='X' && matrix[coordinateOne][coordinateTwo]!='O' ){
                matrix[coordinateOne][coordinateTwo]='X';
                XtakenPlace=false;
                continue;
            }else{
             console.log("This place is already taken. Please choose another!");
             continue;
            }
    
        }else{
        //Commands for Plyer O;
        if(matrix[coordinateOne][coordinateTwo]!='X' && matrix[coordinateOne][coordinateTwo]!='O' ){
            matrix[coordinateOne][coordinateTwo]='O';
            XtakenPlace=true;
            continue;
        }else{
         console.log("This place is already taken. Please choose another!");
         continue;
        }
        } 
    
}

}

solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);