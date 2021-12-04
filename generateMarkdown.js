

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  
  # Table of Content
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[username](#username)
  -[profile](#profile)
  
 
  ## username:
   ${response.userName}
     
  ## description:
   ${response.description}
     
  ## installation:
   ${response.installation}
     
  ## usage:
   ${response.usage}
     
  ## licenses:
   ${response.license}
     
  ## contribution:
   ${response.contribution}
      
  ## test:
  ${response.test}
     
  ## Questions?:
  For any questions, please contact me with the information below:
 
  GitHub: Github.com/${response.userName}/

  Email: ${response.email}
  `;
};
function renderLicenseBadge(license) {
  let licenseType = license.license; 
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
}
module.exports = generateMarkdown;