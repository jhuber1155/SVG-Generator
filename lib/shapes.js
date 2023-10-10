
class Shapes{//Shapes will be our parent class for all chosen shapes. 
    constructor(fillColor){
        this.fillColor = fillColor;
} 

setColor(fillColor){//This sets the fillColor variable from the test
    this.fillColor = fillColor
}
}

class Triangle extends Shapes{//Triangle inherits Shapes fillColor through the super and sets the shape of triangle and uses "triangle" as an indentifier from the data set.
    constructor(fillColor){
        super(fillColor);
        this.setShape = "triangle"
    }
    render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />`//this renders the actual shape using polygon points and the fillColor from the Shape class is added to the return.
    }
    }

class Circle extends Shapes{//Circle inherits Shapes fillColor through the super and sets the shape of circle and uses "circle" as an indentifier from the data set.
    constructor(fillColor){
        super(fillColor);
        this.setShape = "circle"
    }    
    render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`
    }
}

class Square extends Shapes{//Square inherits Shapes fillColor through the super and sets the shape of square and uses "square" as an indentifier from the data set.
    constructor(fillColor){
        super(fillColor);
        this.setShape = "square"
    }
    render(){
    return `<rect x="90" y="40" width="120" height="120" fill="${this.fillColor}" />`
    }
    }

module.exports = { Shapes, Square, Triangle, Circle};//this allows all the Classes to be used on other pages (like the test page and svg.js)
