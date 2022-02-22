class SummerCamp{
    constructor(organizer,location){
     this.organizer=organizer;
     this.location=location;
    }

    priceForTheCamp = {"child": 150, "student": 300, "collegian": 500}
    listOfParticipants =[];

    registerParticipant (name, condition, money){
        if(this.priceForTheCamp[condition]==undefined){
           throw new Error ("Unsuccessful registration at the camp.");
        }
        if(this.listOfParticipants.find(x=>x.name==name)){
            return `The ${name} is already registered at the camp.`;
        }
        if(this.priceForTheCamp[condition]>money){
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({name, condition, power:100, wins:0})
            return `The ${name} was successfully registered.`

    }
    unregisterParticipant (name){
        if (!this.listOfParticipants.some(x => x.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        let index=this.listOfParticipants.findIndex(x=>x.name==name);
        this.listOfParticipants.splice(index,1);
        return `The ${name} removed successfully.`

    }
    timeToPlay (typeOfGame, participant1, participant2){
        let FindFirstPlayer=this.listOfParticipants.find(x=>x.name==participant1);
        let FindSecondPlayer=this.listOfParticipants.find(x=>x.name==participant2);
      if(typeOfGame=='WaterBalloonFights'){
          if(FindFirstPlayer==undefined || FindSecondPlayer==undefined){
              throw new Error (`Invalid entered name/s.`)
          }
          if (FindFirstPlayer.condition!==FindSecondPlayer.condition){
              throw new Error (`Choose players with equal condition.`)
          }
          if(FindFirstPlayer.power>FindSecondPlayer.power){
            FindFirstPlayer.wins+=1;
            return `The ${FindFirstPlayer.name} is winner in the game ${typeOfGame}.`
          }
          if(FindFirstPlayer.power<FindSecondPlayer.power){
            FindSecondPlayer.wins+=1;
            return `The ${FindSecondPlayer.name} is winner in the game ${typeOfGame}.`
            
          }
          if(FindFirstPlayer.power==FindSecondPlayer.power){
            if(FindFirstPlayer==undefined){
                throw new Error `Invalid entered name/s.`
            }
            return `There is no winner.`
          }
      }else if(typeOfGame=='Battleship'){
         FindFirstPlayer.power= FindFirstPlayer.power+20;
         return `The ${FindFirstPlayer.name} successfully completed the game ${typeOfGame}.`
      }
    }
    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        
        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(x => {
                result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`);
            })

        return result.join('\n');
    }

}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));



