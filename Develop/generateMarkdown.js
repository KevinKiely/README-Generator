// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

/*
function renderLicenseBadge(license) {
  console.log("Function A");
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("Function B");
}

*/

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

## Table of Contents
* [Description] (#Description)
* [Screenshot] (#Screenshot)
* [Deployed Application] (#Deployed Application URL)
* [Dependencies] (#Dependencies)
* [Languages/Usage] (#Usage)
* [Contributions] (#Contributions)
* [Testing] (#Testing)
* [Questions/Contact] (#Questions/Contact)

## Description
${data.description}

## Screenshot
![alt-text](${data.screenshot})

## Deployed Application URL
${data.link}

## Dependencies
${data.requirements}

## Usage
${data.usage}

## Contributions
${data.contributors}

## Testing 
${data.test}

## Questions/Contact
Contact Information

[Contact](mailto:${data.email})
/n
[Github]<a href= "https://github.com/${data.creator}

`;}
module.exports = generateMarkdown;
