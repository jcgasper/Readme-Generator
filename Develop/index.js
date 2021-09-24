// require const's
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const generateMarkdown = require(".src/generateMarkdown.js");

// array of user questions 
const questions = [
// Project Title prompt
{ 
    type: 'input',
    name: 'title',
    message: 'Enter title of project (must enter)',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log("Title required, please enter");
            return false;
        }
    }

},
//Project Description prompt
{ 
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project (must enter)',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log("Must enter project description");
            return false;
        }
    }

},

//installation process prompt
{ 
    type: 'input',
    name: 'installation',
    message: 'Provide instructions for installation process (if applicable)',
    

},

//user instructions prompt
{ 
    type: 'input',
    name: 'instructions',
    message: 'Please provide instructions on how to use your program',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log("Please enter instructions for program");
            return false;
        }
    }

},
//user contribution prompt
{ 
    type: 'input',
    name: 'contribution',
    message: 'Please explain how others may contribute to your program (if applicable)',
    

},
//testing prompt
{
    type: 'input',
    name: 'testing',
    message: 'Please explain how to test program (if applicable)',
    

},

//license choice
{ 
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['GNU AGPLv3', 'GNU GPLv3',
      'GNU LGPLv3', 'Mozilla Public License 2.0',
      'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
      'The Unlicense'],
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please select a license.');
        return false;
      }
    }
  },
  //github username prompt
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username (must enter)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter GitHub username.');
        return false;
      }
    }
  },
  //email prompt
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address (must enter)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your email address');
        return false;
      }
    }
  },
  //Questions prompt
  {
    type: 'input',
    name: 'questions',
    message: 'Please list enter contact information',
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        return false;
      }
    }

  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();





