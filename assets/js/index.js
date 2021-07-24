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
      type: 'list',
      name: 'license',
      message: 'Choose a license from the list',
      choices: ["Apache 2.0", "Boost 1.0"]
    },
  ])
  .then((data) => {
    console.log(data);

    titleUpper = data.title.toUpperCase();

    //const { title, description, installation, usage, license } = data;

    //readIt(data);

    getBadges(data.license);

    const index =`
<a href="${data.link}" rel="nofollow"><img src="${data.src}" alt="${data.alt}" title="${data.badgeTitle}" style="max-width:100%;"></a>
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
${data.license}
## Contributing
${data.contributing}
## Tests
${data.tests}

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
    case "Apache 2.0":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost 1.0":
      badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    default:
  }

};


/*


License choices:
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


<a href="http://badge.fury.io/js/inquirer" rel="nofollow"><img src="https://camo.githubusercontent.com/0824e8e9fe75f212d6d6ccb4338ca8d8dad30fdcce477ba3fb03f5a7656fe306/68747470733a2f2f62616467652e667572792e696f2f6a732f696e7175697265722e737667" alt="npm" data-canonical-src="https://badge.fury.io/js/inquirer.svg" style="max-width:100%;"></a>
<img src="https://camo.githubusercontent.com/0824e8e9fe75f212d6d6ccb4338ca8d8dad30fdcce477ba3fb03f5a7656fe306/68747470733a2f2f62616467652e667572792e696f2f6a732f696e7175697265722e737667" alt="npm" data-canonical-src="https://badge.fury.io/js/inquirer.svg" style="max-width:100%;">
</a>
  */