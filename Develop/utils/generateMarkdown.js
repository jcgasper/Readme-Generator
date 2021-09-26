function renderLicenseBadge(licenseInput) {
  let licenseLink = '';

  if (licenseInput == 'Apache License 2.0') {
    licenseLink = '[![license](https://img.shields.io/badge/license-ApacheLicense2.0-blue)](https://shields.io)';
 }
 
 else if (licenseInput == 'Boost Software License 1.0') {
   licenseLink = '[![license](https://img.shields.io/badge/license-BoostSoftwareLicense1.0-blue)](https://shields.io)';
 }

 else if (licenseInput == 'GNU AGPLv3') {
  licenseLink = '[![license](https://img.shields.io/badge/license-GNUAGPLv3-blue)](https://shields.io)';
  
 }
 
 
 else if (licenseInput == 'Mozilla Public License 2.0') {
    licenseLink = '[![license](https://img.shields.io/badge/license-MozillaPublicLicense2.0-blue)](https://shields.io)';
 }
 
 else if (licenseInput == 'MIT License') {
    licenseLink = '[![license](https://img.shields.io/badge/license-MITLicense-blue)](https://shields.io)';
 }
 

 else if (licenseInput== 'NO LICENSE') {
  licenseLink = '';
 
 }
 
return licenseLink;

 
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
  
  
  else if (licenseInput == 'Mozilla Public License 2.0') {
     licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  }
  
  else if (licenseInput == 'MIT License') {
     licenseLink = 'https://choosealicense.com/licenses/mit/';
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
  let badgeLink = renderLicenseBadge(data.license);
  return `# ${data.title}
  ## Description

  ${data.description}
  
  
  ${badgeLink}
  
  ## Table of Contents 
  
  
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

