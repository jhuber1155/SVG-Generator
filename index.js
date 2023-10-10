const { readFile, writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const SVG = require('./lib/svg');

inquirer //program used to help us ask the user questions about how they want their logo designed.
  .prompt([
    {
      type: 'input',
      message: 'What letters would you like to use? You may choose up to 3 letters',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What color would you like to make the letters?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'What shape would you like to have behind the letters? A triangle, circle, or square?',
      choices: ['triangle', 'circle', 'square'],
      name: 'shape',
    },
    {
        type: 'input',
        message: 'What color would you like to make the background shape?',
        name: 'fillColor',
    },
  ])
  .then((data) => {//takes the data from the user input
    return writeFile('./lib/logo.json', JSON.stringify(data))//stringifies that data and creates a file called logo.json in the lib folder.
      .then(() => {
        console.log('Generated logo.json');//console logs that a file was created
        return data;//returns the data so it can be used further down the promise chain
      })
      .catch((err) => {
        console.error('Error writing logo.json:', err);//console logs an error if the logo.json isnt written
        throw err;
      });
  })
  .then((data) => {//takes the user input data and creates a new class SVG
    const svg = new SVG(
      data.text,
      data.textColor,
      data.shape,
      data.fillColor
    );
    const expectedSvg = svg.render(); //takes the data from the SVG.js file and renders it into a .svg compatable data

    return writeFile('./examples/logo.svg', expectedSvg) //this writes the svg file from the previous render
      .then(() => {
        console.log('Generated logo.svg');//console logs that an svg file of your logo was created.
      })
      .catch((err) => {
        console.error('Error writing logo.svg:', err);
        throw err;//a catch to go with the promise, throwing an error if it doesnt write the .svg file
      });
  })
  .catch((err) => {
    console.error('An error occurred:', err);//a catch all error to go with the first promise in case something goes wrong
  });
