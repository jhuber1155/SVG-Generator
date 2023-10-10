const fs = require('fs');
const { readFile, writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const SVG = require('./lib/svg');

inquirer
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
    .then((data) => {              
    const svg = new SVG (
      data.text,
      data.textColor,
      data.shape,
      data.fillColor,
    );
    expectedSvg = svg.render();
    return writeFile('./examples/logo.svg', svg);
    })
    .then(() => {
      console.log('Generated logo.svg')
    })
    .catch((error) => {
      console.log(error);
      console.log('Unable to generate logo.svg');
    });

