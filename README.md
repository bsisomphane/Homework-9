# ReadMe-Generator

## Description
ReadMe.md Generator creates the perfect ReadMe file from the command line for the perfect.
This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Methodology](#methodology)
* [License](#license)

## Installation

To generate your own README, `git clone` the repo down to your local so you have the Node project on your local.

Run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:

  * [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt you for your inputs from the command line.
  
 The application will start by running `node index.js` in the command line.

Answer the prompts in your command line to generate the README.

After answering all the prompts, your README file will be named 'ExampleREADME.md' and will be ready for you at the root of the repo.

## Usage

When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.

Finally, `fs.writeFile` is used to generate your project's README.md file. 

## Walkthrough

For a video explaining how to run and use the ReadMe Generator is below:
https://watch.screencastify.com/v/2LTA0G4RgHDrRyJNETzH

## Questions?

Feel free to contact me with examples or any questions via the information below:

GitHub: [@bsisomphane](https://github.com/bsisomphane/)

Email: bsisomphane@gmail.com
