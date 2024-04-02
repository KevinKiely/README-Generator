function renderLicenseBadge(data) {
  if (data.license !== "none") {
    return `![Github License](https://img.shields.io/badge/${data.license}0f7743)`;
  }
  return "";}

function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data)}

## Table of Contents
* [Description](#Description)
* [Screenshot](#Screenshot)
* [Deployed Application](#Deployed Application URL)
* [Dependencies](#Dependencies)
* [Languages/Usage](#Usage)
* [Contributions](#Contributions)
* [Testing](#Testing)
* [Questions/Contact](#Questions/Contact)

## Description
${data.description}

## Screenshot
![N/A](${data.screenshot})

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
[Github] https://github.com/${data.creator}
`;}
module.exports = generateMarkdown;
