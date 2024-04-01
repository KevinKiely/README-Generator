// TODO: Include packages needed for this application
// Import inquirer, fs the filing system, and generateMarkdown.js

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    //Title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    //License
    {
        type: "checkbox",
        name: "license",
        message: "Select which license applicable to this project.",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD2", "BSD3", "Boost Software License 1.0", "Eclipse Public License 2.0", "Mozilla Public License 2.0", "N/A"],
    },
    //Description
    {
        type: "input",
        name: "description",
        message: "Please describe the functionality of your project.",
    },
    //Screenshot (if applicable)
    {
        type: "input",
        name: "screenshot",
        message: "Please provide the path you would like to use as a screenshot, or input N/A.",
    },
    //Live application URL (if applicable)
    {
        type: "input",
        name: "link",
        message: "Please provide a URL where a user can access your deployed application, or input N/A.",
    },
    // Project Dependencies
    {
        type: "input",
        name: "requirements",
        message: "List any project dependencies here.",
    },
    // Usage
    {
        type: "input",
        name: "usage",
        message:
            "Please list languages used in the development of this project.",
    },
    // Contributions
    {
        type: "input",
        name: "contributors",
        message: "Please list all contributors here.",
        default: "",
    },
    // Testing
    {
        type: "input",
        name: "test",
        message: "Provide a walkthrough of required tests if applicable.",
    },

    // Contact Information
    {
        type: "input",
        name: "creator",
        message: "Enter your github username if you wish to be contacted with questions regarding this project, otherwise leave blank.",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email if you wish to be contacted with questions regarding this project, otherwise leave blank.",
    },
];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        console.log("function is working");

        fs.writeFile('README.md', generateMarkdown(responses) , (err) =>
        err ? console.error(err) : console.log('File Created Successfully')
        );

        /*
        fs.appendFile('README.md', generateMarkdown(responses), (err) => err ? console.error(err) : console.log('Answers Appended to File')
        );
        */
    });
}

// Function call to initialize app, will get called when you do node index.js in command line
init();
