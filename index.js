const cowsay = require('cowsay');
const {maVie} = require('./information.js');

console.log(cowsay.say({text:(`Hi, my name is ${maVie.myName} and I'm ${maVie.study} years old`)}));  

