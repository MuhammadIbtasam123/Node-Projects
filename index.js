// var inquirer = require('inquirer');
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {message: "What is your name?", 
    name: "URL"
},
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream('qr.png'));
    fs.writeFile('qr.txt', url, function (err) {
        if (err) throw err;
        console.log('Saved!');
        });

      })
  .catch((error) => {
    console.log(error)
  });