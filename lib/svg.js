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
        this.text = text
        this.textColor = textColor

        if (text.length > 3){
            throw new Error("Text must not exceed 3 characters.")
        }
        const pattern = new RegExp('([A-Za-z])');
        if (!pattern.test(text)) {
        throw new Error('Please choose 3 Letters without numbers or symbols');
        }
    
        return`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`}
    

    setShape(shape, fillColor){
        this.shape = shape;
        this.fillColor = fillColor;
        
        if (shape === "circle") {
            return `<circle cx="150" cy="100" r="80" fill="${fillColor}"/>`};
        if (shape === "triangle") {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${fillColor}"/>`};
        if (shape === "square") {
            return `<rect x="90" y="40" width="120" height="120" fill="${fillColor}"/>`};
        };
    
    render() {
            let expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
        return expectedSvg
        }
}

module.exports = SVG