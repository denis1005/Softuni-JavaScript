function solve(width,height,color ){
    let rectangle={
        width:width,
        height:height,
        color: color[0].toUpperCase() + color.substring(1),
        calcArea: function(){
         return this.width*this.height;
        }
    
    }
    console.log(rectangle.width);
    console.log(rectangle.height);
    console.log(rectangle.color);
    console.log(rectangle.calcArea());
    
    
}
solve(4, 5, 'red');