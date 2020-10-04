const myInfo = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`Hello my name is ${myInfo}.`),
    e : "oO",
    T : "U",
}));


