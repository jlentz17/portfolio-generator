const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
// const fs = require("fs");

// const generatePage = require("./src/page-template");

// const profileDataArgs = process.argv.slice(2);

// // const [name, github] = profileDataArgs;

// const pageHTML = generatePage(name, github);

// // const printProfileData = profileDataArr => {
// //     for (let i = 0; i < profileDataArr.length; i += 1) {

// //     }

// //     profileDataArr.forEach(profileItem => console.log(profileItem))
// //     }
// // printProfileData(profileDataArgs);

// fs.writeFile("./index.html", pageHTML, err => {
//   if (err) throw err;
