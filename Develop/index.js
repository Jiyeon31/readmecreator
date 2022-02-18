// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// modules
const api = require('./utils/api.js');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your github repository name?",
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A GitHub repo name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe how to install your project.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "If applicable, describe usage of your project.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, describe how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any written tests for your application.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log("Success!");
});
}
const writeAsync = util.promisify(writeToFile);
// TODO: Create a function to initialize app
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
    
        // Call GitHub api for user info
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();
