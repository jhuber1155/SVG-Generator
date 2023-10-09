const { readFile, writeFile } = require('fs/promises');
const { Shapes } = require("./shapes");
const { Triangle } = require("./shapes");
const { Circle } = require("./shapes");
const { Square } = require("./shapes");

// readFile('./lib/logo.json')
// .then((json) => { 
//     const svg = JSON.parse(json);
//     const svg = new SVG(  //just a plain constructor begin
//     text,
//     textColor,
//     setShape,
//     setColor
// );
// svg.render(); //just a plain constructor end
// })

class SVG {
    constructor(text, textColor, setShape, setColor) {

        if (text.length > 3){
            throw new Error("Text must not exceed 3 characters.")
        }
        const pattern = new RegExp('([A-Za-z)');
        if (!pattern.test(text)) {
        throw new Error('Please choose 3 Letters without numbers or symbols');
        }

        this.text = text;
        this.textColor = textColor;
        this.setShape = setShape;
        this.setColor = setColor;
    }

    setText(text, textColor) {
        this.setText.render(`<text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>`)
    }

    setShape(setShape, setColor) {
        if(setShape === "Triangle"){
            this.setShape.render(`<polygon points="150, 18 244, 182 56, 182" fill= ${setColor}/>`)
        }else if(setShape === "Circle"){
            this.setShape.render(`<circle cx="150" cy="100" r="80" fill= ${setColor}/>`)
        }else if(setShape === "Square"){
            this.setShape.render(`<rect x="90" y="40" width="120" height="120" fill= ${setColor}/>`)
        }
    }

    render() {
    return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.setShape()}${this.setText()}</svg>`)
    }
    

}

module.exports = SVG