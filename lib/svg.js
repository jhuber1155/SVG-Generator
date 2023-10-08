const { readFile, writeFile } = require('fs/promises');


readFile('./lib/logo.json')
.then((json) => {
  const svgData = JSON.parse(json);
  const svg = new SVG (
    svgData.text,
    svgData.textColor,
    svgData.setShape,
    svgData.setColor
  );
  const expectedSvg = svg.render();
  return writeFile("./examples/logo.svg", svg);
})
.then(() => {
    console.log('Generated logo.svg');
})
.catch((error) => {
    console.log(error);
    console.log('Unable to read svgData')
});

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

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    }

    setText(){
        
    }
}



module.exports = SVG