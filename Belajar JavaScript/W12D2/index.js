//Lecture 2 - JavaScript Control Flow
//==========================================================================================================

// Breaking a loop (memberhentikan loop)
for (let i = 1; 1 <= 10; i++) {
    if(i==6) {
        console.log("Loop terminated at i = 6");
        break;
    }
    console.log("Current value of i:", i);
}

//Continue to the next iteration (menskip yang ada aturan aja lalu bisa lanjut lagi jika tdk sesuai aturan)
for (let i = 0; i < 10; i++) {
    //if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    console.log(i); //1, then 3, 5, 7, 9
}

//Contoh lagi
for (let j = 5; j >= 1; j--) {
    console.log(j);
}

//Contoh lagi
let sum = 0;
for (let k = 1; k <= 5; k++) {
    sum += k;
}
console.log(sum);

//function
function greet(name) {  //(name): itu parameter ga wajib ada, boleh kosong
    console.log(`Hello, ${name}!`); //isi function
    greet("Alice"); //output: "Hello, Alice!"
}

//bisa juga
function greet(name) {
    return `Hello, ${name}!`;
}
const message = greet("Bob");
console.log(message); //output: "Hello, Bob!"

//function penjumlahan
const sum1 = function(a, b) {
    return a + b;
}
console.log(sum1(2, 3)); //output: 5

//Local variables
function showMessage() {
    let message = "Hello, I'm Nina!";  //Local variable

    alert(message);
}

showMessage(); //Hello, I'm Nina

alert(message); //akan error! karena the variable is local to the function

//Arrow function (jadi singkat) tandanya =>
let sum2 = (a, b) => a + b;

//contoh arrow function lagi
let sum3 = (a, b) => {
    let result = a + b;
    return result;
};
console.log(sum3(1, 2)); //hasilnya 3

//yeyy kelarrrr, alhamdulillah...