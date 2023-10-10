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
    return writeFile('./lib/logo.json', JSON.stringify(data))
      .then(() => {
        console.log('Generated logo.json');
        return data;
      })
      .catch((err) => {
        console.error('Error writing logo.json:', err);
        throw err;
      });
  })
  .then((data) => {
    const svg = new SVG(
      data.text,
      data.textColor,
      data.shape,
      data.fillColor
    );
    const generatedSvg = svg.render();

    return writeFile('./examples/logo.svg', generatedSvg)
      .then(() => {
        console.log('Generated logo.svg');
      })
      .catch((err) => {
        console.error('Error writing logo.svg:', err);
        throw err;
      });
  })
  .catch((err) => {
    console.error('An error occurred:', err);
  });
