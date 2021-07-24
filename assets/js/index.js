const inquirer = require('inquirer');
const fs = require('fs');
const open = require('open');

/*
const readIt = fs.readFile('Template_README.md', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data);
  });
  */

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'userID',
      message: 'What is your GitHub User ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What are the steps to use your application?',
    },
    {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions?',
      },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license from the list',
      choices: ["WTFPL", "GPL", "Apache", "Boost", "Open Data Commons Attribution", "ODbL"],
      default: "WTFPL"
    },
  ])
  .then((data) => {
    console.log(data);

    titleUpper = data.title.toUpperCase();

    //const { title, description, installation, usage, license } = data;

    //readIt(data);

    getBadges(data.license);

    const index =`
<a href="${link}" rel="nofollow"><img src="${src}" alt="${alt}" title="${title}" style="max-width:100%;"></a>
# ${titleUpper}

## Description
${data.description}

#### Table of Contents
If your README is long, add a table of contents to make it easy for users to find what they need.
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is covered under the ${data.license} license. 

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
My GitHub: https://github.com/${data.userID}

For additional questions, contact me at: ${data.email}

`;

    const filename = "README.md";
    fs.writeFile(filename, index, (err) => {
      err ? console.log(err) : console.log('Success!')
      open('README.md', { "wait": true });
    }
    );
  });

const getBadges = (info) => {
  switch (info) {
    case "WTFPL":
      link = "http://www.wtfpl.net/about/";
      src = "https://img.shields.io/badge/License-WTFPL-brightgreen.svg";
      alt = "WTFPL";
      title = "WTFPL";
      //badge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
      break;
    case "GPL":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      src = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      alt = "GPL";
      title = "GPL";
      //badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Apache":
      link = "https://opensource.org/licenses/Apache-2.0";
      src = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      alt = "Apache";
      title = "Apache";
      //badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost":
      //badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      link = "https://www.boost.org/LICENSE_1_0.txt";
      src = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
      alt = "Boost";
      title = "Boost";
      break;
    case "Open Data Commons Attribution":
      //badge = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
      link = "https://opendatacommons.org/licenses/by/";
      src = "https://img.shields.io/badge/License-ODC_BY-brightgreen.svg";
      alt = "Open Data Commons Attribution";
      title = "Open Data Commons Attribution";
      break;
    case "ODbL":
      //badge = "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
      link = "https://opendatacommons.org/licenses/pddl/";
      src = "https://img.shields.io/badge/License-PDDL-brightgreen.svg";
      alt = "ODbL";
      title = "ODbL";
      break;
    default:
      link = "http://www.wtfpl.net/about/";
      src = "https://img.shields.io/badge/License-WTFPL-brightgreen.svg";
      alt = "WTFPL";
      title = "WTFPL";
  }
};