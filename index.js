const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

let questions = [
  {
    message: "What is the name of the project?",
    name: "title",
  },
  {
    message: "Please provide a table on content.",
    name: "table of content",
  },
  {
    message: "What is the name of the user?",
    name: "userName",
  },
  {
    message: "Please provide a description of the project.",
    name: "description",
  },
  {
    message: "What is the installation process?",
    name: "installation",
  },
  {
    message: "How will this project be used?",
    name: "usage",
  },
  {
    message: "What licenses are required with this project?",
    name: "licenses",
  },
  {
    message: "Who were the contributors to this project?",
    name: "contribution",
  },
  {
    message: "What is the test process for this project?",
    name: "test",
  },
  {
    message: "What is the user github email address?",
    name: "GitHub user email",
  },
];

inquirer.prompt(questions).then((response) => {
  fs.writeFile("ReadMe2.md", generateMarkdown(response), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success!");
    }
  });
});
