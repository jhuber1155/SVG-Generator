const { readFile, writeFile } = require('fs/promises');
const { Shapes, Square, Triangle, Circle } = require("./shapes");

class SVG {
    constructor(text, textColor, setShape, fillColor) {
        this.text = text;
        this.textColor = textColor;
        this.setShape = setShape;
        this.fillColor = fillColor;
    }

    setText(text, textColor) {
        this.text
        this.textColor

        if (text.length > 3){
            throw new Error("Text must not exceed 3 characters.")
        }
        const pattern = new RegExp('([A-Za-z)');
        if (!pattern.test(text)) {
        throw new Error('Please choose 3 Letters without numbers or symbols');
        }
    }
        render() {
        return`<text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>`}
    }

    setShape(setShape, fillColor); {
        // if(setShape === "triangle"){
        //     this.setShape.render(`<polygon points="150, 18 244, 182 56, 182" fill= ${setColor}/>`)
        // }else if(setShape === "circle"){
        //     this.setShape.render(`<circle cx="150" cy="100" r="80" fill= ${setColor}/>`)
        // }else if(setShape === "square"){
        //     this.setShape.render(`<rect x="90" y="40" width="120" height="120" fill= ${setColor}/>`)
        // }
        if(setShape === "circle"){
            render(`<circle cx="150" cy="100" r="80" fill=${fillColor}/>`)
        }else if(setShape === "triangle"){
            this.setShape.render(`<polygon points="150, 18 244, 182 56, 182" fill=${fillColor}/>`)
        }else if(setShape === "square"){
            this.setShape.render(`<rect x="90" y="40" width="120" height="120" fill=${fillColor}/>`)
        }
    }

    render() {
    return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.setShape()}${this.setText()}</svg>`)
    }


}

module.exports = SVG