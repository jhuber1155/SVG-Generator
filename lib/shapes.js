
class Shapes{
    constructor(fillColor){
        this.fillColor = fillColor;
} 

setColor(fillColor){
    this.fillColor = fillColor
}
}

class Triangle extends Shapes{
    constructor(setShape, fillColor){
        super(fillColor);
        this.setShape = setShape
        this.fillColor = fillColor
    }
    render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />`
    }
    }

class Circle extends Shapes{
    constructor(fillColor){
        super(fillColor);
        this.setShape = "circle"
    }    
    render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`
    }
}

class Square extends Shapes{
    constructor(setShape, fillColor){
        super(fillColor);
        this.setShape = setShape
        this.fillColor = fillColor
    }
    render(){
    return `<rect x="90" y="40" width="120" height="120" fill="${this.fillColor}" />`
    }
    }

module.exports = { Shapes, Square, Triangle, Circle};
