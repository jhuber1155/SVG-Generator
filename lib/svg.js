const { readFile, writeFile } = require('fs/promises');


readFile('./lib/logo.json')
.then((json) => {
  JSON.parse(json);
    text,
    textColor,
    setShape,
    setColor
})

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

    render(text, textColor, setShape, setColor) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${setShape} fill=${setColor}/><text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text></svg>`
    }

}

module.exports = SVG