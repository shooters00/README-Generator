const inquirer = require('inquirer');
const fs = require('fs');
const open = require('open');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'What is your location?',
    },
    {
      type: 'input',
      name: 'bio',
      message: 'What is your bio?',
    },
    {
      type: 'input',
      name: 'linkedIn',
      message: 'What is your LinkedIn URL?',
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'What is your GitHub URL?',
    },
  ])
  .then((data) => {

    //const util = require('util');

    // create writeFile function using promises instead of a callback function
    //const writeFileAsync = util.promisify(fs.writeFile);

    const genREAD = fs.readFile('Template_README.md', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log("Read success!");
    });

    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
        },
        {
          type: 'input',
          name: 'location',
          message: 'What is your location?',
        },
        {
          type: 'input',
          name: 'bio',
          message: 'What is your bio?',
        },
        {
          type: 'input',
          name: 'linkedIn',
          message: 'What is your LinkedIn URL?',
        },
        {
          type: 'input',
          name: 'gitHub',
          message: 'What is your GitHub URL?',
        },
      ])
      .then((data) => {


        //const htmlPageContent = generateHTML(answers);

        const filename = "README.md";
        fs.writeFile(filename, data.name, (err) => {
          err ? console.log(err) : console.log('Success!')
          //open('README.md', { "wait": true });
        });

      });
