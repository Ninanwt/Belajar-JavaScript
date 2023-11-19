//Lecture 1 - JavaScript Basics
//=================================================================================================================

let x = 0;
console.log(x);

x = 2;
console.log(x);

// Jawabannya: Akan muncul 0 dan 2, 0 di taro di x lalu si 2 masuk kedalam x ditimpa gitu

// let x = 1;
// let x = 2;
// console.log(x);
// Jawabannya: cuma boleh sekali definisikan variabel, gaboleh sama tp kalo di ganti y salah satunya jd aman

// Primitive data types
let myString = "This is a string";
let myNumber = 10;
let myBoolean = true;

// Non Primitive data types
let array = [1, 2, 3, 4];        //Array: data lebih dari 1
let object = {name: "Fitra", age: 27, isMarrie:false};  //object: ada penanda, ada kuncinya dan isinya
let func = function(a,b) {return a+b}  //function: ada kembalian nilai yg untuk disimpan ke variabelnya

// Check your data type
let name = "john";
console.log(typeof name);  //nanti outputnya muncul tulisan string, kalo diganti jd angka akan muncul number

// Contoh perbandingan
const a = 5;
const b = 10;
console.log(a == b);  //jawabannya false karena x tidak sama dengan y

// Contoh lagi
const j = 5;
const k = 10;
console.log(j+k); //15
console.log(j-k); //-5
console.log(j*k); //15
console.log(j/k); //0,5

// Contoh perbandingan lagi
const m = true;
const n = false;
console.log(m && n); //aturan and: dua2nya harus benar, kalo ada satu yg salah dia salah
console.log(m || n); //aturan or: salah satu harus true maka dia true, tp kalo dua2nya false dia false
console.log(!m); //aturan not true: hasilnya kebalikan dr true yaitu false
console.log(!n); //aturan not false: hasilnya kebalikan dr false yaitu true

//contoh lagi
const p = '1';   //kalo pake kutip dia itu string
const q = 1;
console.log(p+q); //hasilnya 11, karena karakter+number hasilnya akan satu2 ga diitung

// For loop
for (let i = 0; i < 5; i++) {
    console.log("The value of i is:" + i); //output: 0,1,2,3,4
}

// while loop
let r = 0;
while (r < 5) {
    console.log("The value of r is:" + r); //output: 0,1,2,3,4
    r++;
}

// Braking a loop (memberhentikan loop)
for (let i = 1; 1 <= 10; i++) {
    if(i==6) {
        console.log("Loop terminated at i = 6"); 
        break;
    }
    console.log("Current valu of i is:", i);
}

//Alhamdulillah selesaiiii ^_^