//belajar builtin module

const {readFileSync } = require ('fs');

const file = readFileSync('./object.json')
console.log(file);