const fs = require('fs');
const { readFile, writeFile } = require('fs/promises');
const { Shapes, Square, Triangle, Circle } = require("./shapes");

fs.readFile("./lib/logo.json", "utf8", (err) => {
    err ? console.error(err) : console.log("read logo.json")})//this takes the file generated from the index and parses it out for the logic in svg.js

class SVG { //this SVG class which takes the parsed data sets variables
    constructor() {
        this.text = '';
        this.textColor = '';
        this.fillColor = '';
        this.shape = '';
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
    

    setShape(shape){//this function renders the shape from the shapes.js page depending on the shape chosen from the index page.
        this.shape = shape.render()
    }
    
    render(){
            let expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;//this is the initial website used to create the svg. Other elements will be appended to it later.

            if (this.shape) {//This appends the shape into the svg url
                expectedSvg += this.shape
            }

            if (this.text && this.textColor) {//this will append the text and text color into the svg url
                expectedSvg += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
            }

            expectedSvg += '</svg>';//this adds the ending tag to complete the svg
        
        return expectedSvg //this creates the expectedSvg variable with all the elements needed to create the logo.
    }
};

module.exports = SVG //this allows the SVG class to be seen on the other pages which require it.