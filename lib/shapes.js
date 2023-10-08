// const shapes = require('./svg');

class Shapes{
    constructor(x, y, text, textColor, setColor){
        this.x = 300;
        this.y = 200;
        this.text = `${text}`;
        this.textColor = `${textColor}`;
        this.setColor = `${setColor}`;

    if(text.length > 3){
        throw new Error('Text must not exceed 3 characters.');
    }
    const pattern = new RegExp('([A-Za-z)');
    if (!pattern.test(text)) {
        throw new Error('Please choose 3 Letters without numbers or symbols');
    }}
} 


class Triangle extends Shapes{
    constructor(x, y, text, textColor, setShape, setColor){
    super(x, y, text, textColor, setColor);
    this.setShape = `${setShape}`

        render() = function () {
            if(setShape === "Triangle"){
            return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill= ${setColor}/><text x="147" y="130" text-anchor="middle" fill = ${textColor}>${text}</text></svg>`)
        }
    }}
}

class Circle extends Shapes{
    constructor(x, y, text, textColor, setShape, setColor){
        super(x, y, text, textColor, setColor);
        this.setShape = `${setShape}` 
    
        render() = function () {
            if(setShape === "Circle"){
            return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill= ${setColor}/>
            <text x="150" y="105" text-anchor="middle" fill = ${textColor}>${text}</text></svg>`)
        } 
        }}
}

class Square extends Shapes{
    constructor(x, y, text, textColor, setShape, setColor){
        super(x, y, text, textColor, setColor);
        this.setShape = `${setShape}` 
    
        render() = function () {
            if(setShape === "Square"){
            return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill= ${setColor}/><text  x="150" y="150" text-anchor="middle" fill = ${textColor}>${text}</text></svg>`)
        }
        }}
}

module.exports = { Shapes };
module.exports = { Triangle };
module.exports = { Circle };
module.exports = { Square };