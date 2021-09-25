function renderLicenseBadge(license) {
  

  let link = '[![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)'

}







// TODO: Create a function that returns the license link

function renderLicenseLink(licenseInput) {
  
  let licenseLink = '';
  //if conditional to give the license the correct link
  
  if (licenseInput == 'Apache License 2.0') {
     licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  }
  
  else if (licenseInput == 'Boost Software License 1.0') {
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  }

  else if (licenseInput == 'GNU AGPLv3') {
   licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  }
  else if (licenseInput == 'GNU GPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  }
  else if (licenseInput == 'GNU LGPLv3') {
     licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  }
  else if (licenseInput == 'Mozilla Public License 2.0') {
     licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  }
  
  else if (licenseInput == 'MIT License') {
     licenseLink = 'https://choosealicense.com/licenses/mit/';
  }
  
  
  else if (licenseInput == 'The Unlicense') {
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  }

  else if (licenseInput== 'NO LICENSE') {
   licenseLink = '';
  
  }
  
return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// generate markdown function



function generateMarkdown(data) {
  
  let licenseLink = renderLicenseLink(data.license);
  //console.log("link test " + LicenseLink );
  return `# <${data.title}>
  ## Description

  ${data.description}
  
        FIX so license gets proper link
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
  
  ## Table of Contents 
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  - [Credits](#credits)
  
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.instructions}

  ## License
  ${data.license}

  ${licenseLink}


  ---
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  ## Badges
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  If your project has a lot of features, list them here.
  

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.testing}  

  ## Questions
  Github Profile: www.github.com/${data.username}
  Email: ${data.email}

  ${data.questions}
  
  ## Credits
  List of collaborators, if any, with links to their GitHub profiles. Or links to resources used
  
  ${data.credits}

  `
};
module.exports = generateMarkdown;

