// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![Github license](https://img.shields.io/badge/License-${license}-blue.svg)`; 
    }
    return ''
    // if (license === 'Apache') {
    //     return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
    // } else if (license === 'GNU'){
    //     return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
    // } else if (license === 'MIT'){
    //     return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    // } else if (license === 'ISC'){
    //     return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
    // } else {
    //     return ''
    // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `![Github license](https://opensource.org/licenses/${license})`; 
    } else if (license === GNU) {
        return `![Github license](https://www.gnu.org/licenses/gpl-3.0)`
    }
}
//     if (license === 'Apache') {
//         return ''
//     } else if (license === 'GNU'){
//         return ''
//     } else if (license === 'MIT'){
//         return ''
//     } else if (license === 'ISC'){
//         return ''
//     } else {
//         return ''
//     }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return ``;
      } else {
        return `## Licenses
        This project is licensed under the ${license} license.`
      }
    }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
