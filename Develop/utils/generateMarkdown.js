// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseApi = require('./api');
let licenseList = `${licenseApi.license}`
let noLicense = '';

function renderLicenseBadge() {
  if(licenseList = undefined) {
    return noLicense;
  } else {
  return `![Badge for GitHub](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  `}
};

console.log(renderLicenseBadge);
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  if(licenseList = undefined) {
    return noLicense;
  } else {
  return `
  (https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  `}
}
console.log(renderLicenseLink);
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
  let licenseSec = `${userResponses.license}`;
  if(licenseList = undefined) {
    return noLicense;
  } else {
  return `${licenseSec}
  `}
}
console.log(renderLicenseSection);
function generateMarkdown(userResponses, userInfo) {

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
  ![Badge for GitHub](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) 
  
  
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
    
  ${userResponses.license}
  `;
  
  // Create contribution section
  if (userResponses.contributing !== '') {
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
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
  
    questionSec +=
  `
  Email: ${userInfo.email}
  `};

 // Add developer section to markdown
  markdownFunc += questionSec;

  // Return markdown
  return markdownFunc;
}

module.exports = generateMarkdown;
