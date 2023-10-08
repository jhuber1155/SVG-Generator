// const shapes = require('./svg');

class Shapes{
    constructor(setColor){
        this.setColor = `${setColor}`;
} 
}

class Triangle extends Shapes{
    constructor(setColor, setShape){
    super(setColor);
    this.setShape = setShape

        this.render() = function () {
            if(setShape === "Triangle"){
            return (`<polygon points="150, 18 244, 182 56, 182" fill= ${setColor}/>`)
        }
    }}
}

class Circle extends Shapes{
    constructor(setColor, setShape){
        super(setColor);
        this.setShape = setShape 
    
        render() = function () {
            if(setShape === "Circle"){
            return (`<circle cx="150" cy="100" r="80" fill= ${setColor}/>`)
        } 
        }}
}

class Square extends Shapes{
    constructor(setColor, setShape){
        super(setColor);
        this.setShape = setShape 
    
        render() = function () {
            if(setShape === "Square"){
            return (`<rect x="90" y="40" width="120" height="120" fill= ${setColor}/>`)
        }
        }}
}

module.exports = { Shapes };
module.exports = { Triangle };
module.exports = { Circle };
module.exports = { Square };