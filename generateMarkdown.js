

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
  
  ${response.username}
  ## username:
  
      ${response.description}
  ## description:
  
      ${response.installation}
  ## installation:
  
      ${response.usage}
  ## usage:
  
      ${response.licenses}
  ## licenses:
  
      ${response.contribution}
  ## contribution:
  
      ${response.test}
  ## test:
  
      ${response.email}
  ## Questions?:
  
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