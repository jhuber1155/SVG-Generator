const fs = require('fs');
const { readFile, writeFile } = require('fs/promises');
const { Shapes, Square, Triangle, Circle } = require("./shapes");

fs.readFile("./lib/logo.json", "utf8", (err) => {
    err ? console.error(err) : console.log("read logo.json")})//this takes the file generated from the index and parses it out for the logic in svg.js

class SVG { //this SVG class which takes the parsed data sets variables
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
            throw new Error("Text must not exceed 3 characters.")//this checks to make sure there are only 3 letters or less entered
        }
        const pattern = new RegExp('([A-Za-z])');//checks to make sure they are upper case or lower case letters and nothing else
        if (!pattern.test(text)) {
        throw new Error('Please choose 3 Letters without numbers or symbols');//error if anything other than upper or lower case letters are used.
        }
    }
        // render(){
        // return`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`}
    

    // setShape(shape, fillColor){
    //     this.shape = shape;
    //     this.fillColor = fillColor
        
    //     if (shape === "circle") {
    //         return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`};
    //     if (shape === "triangle") {
    //         return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />`};
    //     if (shape === "square") {
    //         return `<rect x="90" y="40" width="120" height="120" fill="${this.fillColor}" />`};
    //     };
    
    render() {
            let expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;//this is the initial website used to create the svg. Other elements will be appended to it later.

            if(this.text && this.textColor){
                let expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`//this is where the text and text color the user has chosen will be placed into the url and appended to create those style elements of the logo.
            }
            if (this.shape && this.fillColor) {
                let expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`//Here the shape and backfill color are placed in the url and appended to create the shape and background color style elements of the logo.
            }
        return expectedSvg //this creates the expectedSvg variable with all the elements needed to create the logo.
        }
}

module.exports = SVG //this allows the SVG class to be seen on the other pages which require it.