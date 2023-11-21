// pengen import function tambah yang tadi udah dibikin di file perhitungan.js dalam folder module di file index.js

const{tambah, kurang, kali, passwordnyaApa, manusia} = require ("./W14D2/perhitungan");

console.log(tambah(11, 11));
console.log(kurang(20, 1));
console.log(kali(5, 5));
console.log(passwordnyaApa);
console.log(manusia);

//module di node.js ada 3:
//1. module yang dibuat sendiri (user-created module)
//2. Thirdparty module/module npm
//3. builtin-module