class List {

 elements=[];
 add(element){
     this.elements.push(element);
     this.elements.sort((a,b)=>a-b)

 }
 remove(index){
     if(index<=this.elements.length-1 && index>=0){
        this.elements[index]='delete';
        this.elements=this.elements.filter(x=>x!='delete');
     }
     this.elements.sort((a,b)=>a-b)
     

 }

 get(index){

    if(index<=this.elements.length-1 && index>=0){
        return this.elements[index];
     }
  
 }

 size=this.elements.length;

}

let list = new List();
list.add(5);
list.add(6);
list.add(1);
list.add(7);
list.remove(3);

for (let index = 0; index < list.elements.length; index++) {
    console.log(list.get(index))
    
}
