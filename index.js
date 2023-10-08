const fs = require('fs');
const inquirer = require('inquirer');

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
      choices: ['Triangle', 'Circle', 'Square'],
      name: 'setShape',
    },
    {
        type: 'input',
        message: 'What color would you like to make the background shape?',
        name: 'setColor',
    },
  ])
    .then((data) =>{
        fs.writeFile("./examples/logo.svg", JSON.stringify(data), (err) => {
            err ? console.error(err) : console.log("Generated logo.svg")})
        }); 

        module.exports = Index;
