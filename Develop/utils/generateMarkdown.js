// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
};

console.log(renderLicenseBadge);
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
};

console.log(renderLicenseLink);

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
};

console.log(renderLicenseSection);
function generateMarkdown(userResponses, userInfo) {
  var iconUrl = `![License](https://img.shields.io/badge/License-${userResponses.license}.svg)`;
  // Plug userReponses into table of contents
  let tableCon = `## Table of Contents`;

  if (userResponses.installation !== '') { tableCon += `
  * [Installation](#installation)` };
  
  if (userResponses.usage !== '') { tableCon += `
  * [Usage](#usage)` };

  if (userResponses.tests !== '') { tableCon += `
  * [License](#license)` };
  
  if (userResponses.contributing !== '') { tableCon += `
  * [Contributing](#contributing)` };
  
  if (userResponses.tests !== '') { tableCon += `
  * [Tests](#tests)` };
  
  // Create title and description
  // Generate badges
  let markdownFunc = 
  `# ${userResponses.title} 
  ${iconUrl}
  
  ## Description 
  
  ${userResponses.description}
  
  `
  // Add table of contents data to markdown
  markdownFunc += tableCon;
  
  // Add license section to markdown
  markdownFunc += `
  * [License](#license)`;

  // Create installation section
  if (userResponses.installation !== '') {
  
  markdownFunc +=
  `
  
  ## Installation
  
  ${userResponses.installation}`
  };

  // Create usage section
  if (userResponses.usage !== '') {
  
  markdownFunc +=
  
  `
  
  ## Usage 
  
  ${userResponses.usage}`
  };
  
  // Connect userResponses to license section
  markdownFunc +=
  `
    
  ## License
    
  ${iconUrl}
  ${userResponses.license}
  `;
  
  // Create contribution section
  if (userResponses.contributing !== '') {
  markdownFunc +=
  `
  
  ## Contributing
  
  ${userResponses.contributing}`
  };

  // Create tests section
  if (userResponses.tests !== '') {
  markdownFunc +=
  `
  
  ## Tests
  
  ${userResponses.tests}`
  };

  // Questions section
  let questionSec = 
   `
  ---
  
  ## Questions?
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="30%" height="30%" />
  
  For any questions, please contact me with the information below:
 
  GitHub: (https://github.com/${userResponses.username})<br />

  `;
  // If GitHub email is not null, add to Developer section
  if (userResponses.email !== null) {
  
    questionSec +=
  `
  Email: ${userResponses.email}
  `};

 // Add developer section to markdown
  markdownFunc += questionSec;

  // Return markdown
  return markdownFunc;
}

module.exports = generateMarkdown;
