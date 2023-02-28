// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is your Projects Title?',
    },
    {
        type:'input',
        name: 'description',
        message: 'Describe your project',
    },
    {
        type:'input',
        name: 'installation',
        message: 'How do you install?',
    },
    {
        type:'input',
        name: 'usage',
        message: 'What is usage information about your project',
    },
    {
        type:'input',
        name: 'contribution',
        message: 'What guidelines do you have for contributions?',
    },
    {
        type:'input',
        name: 'test',
        message: 'What test instructions do you have for your project?',
    },
    {
        type:'input',
        name: 'license',
        message: 'Pick a license for you project',
        choices:['Apache','GNU','MIT','ISC','None']
    },
    {
        type:'input',
        name: 'github',
        message: 'Enter Github username',
    },
    {
        type:'input',
        name: 'email',
        message: 'Provide Email for further questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();