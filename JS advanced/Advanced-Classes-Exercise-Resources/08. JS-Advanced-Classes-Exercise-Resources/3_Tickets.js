function solve(input,sorting){
    let result= [];
    class Ticket {
        constructor(destination,price,status){
           this.destination=destination;
           this.price=price;
           this.status=status;
        }
    }

    input.forEach(element => {
        let [destination,price,status]=element.split('|');
        result.push(new Ticket (destination,price,status));
    });

    if (sorting=='price') {
        result.sort((a,b)=>a.price-b.price)
    }else if (sorting=='destination'){
        result.sort((a, b) => b.destination.localeCompare(a.destination));
    }else if (sorting=='status'){
        result.sort((a, b) => b.status.localeCompare(a.status));
    }
return result
}

let result=solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'

)

console.log(result);
//destination, a price, and a status. 