//Lecture 3 - JavaScript Arrays and Objects
//========================================================================================================

//(BELAJAR ARRAYS)

// Array (biasanya pake kurung siku [])
let arr = new Array();
let arr2 = [];

// Contoh ambil salah satu
let dessert = ["ice cream", "cake", "pie"];
console.log(dessert[1]); //mau ambil cake karena dia index ke 1

// Contoh ambil semua (pakai loop)
let pets = ["kucing", "kuda", "kelinci"];

for(var i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}

// Contoh lagi
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.length); 

// Iterating an array (for of): ambil isinya doang
let books = ["books1", "books2", "books3"];

for (let book of books) {
    console.log(book);
}

// Iterating an array (for each): paket lengkap bisa ambil item, index, array
arr.forEach(function(item, idex, array) {
});

// Contoh for each
["Budi", "Ani", "Siti"]. forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

//Array method - pop(): mengeluarkan bagian paling akhir
let fruits = ["Apple", "Mango", "Banana", "Guava"];

console.log(fruits.pop()); //Remove "Guava" and console.log it
console.log(fruits); //output: ["Apple", "Mango", "Banana"]

//Array method - push(): menambahkan bagian paling akhir
fruits.push("Watermelon");
console.log(fruits); //output: ["Apple", "Mango", "Banana", "Watermelon"]

//Array method - shift(): mengeluarkan sesuatu dari depan
console.log(fruits.shift()); //"Apple"
console.log(fruits); //output:["Mango", "Banana", "Watermelon"]

//Array method - unshift(): menambahkan sesuatu dari depan
fruits.unshift("Pineapple");
console.log(fruits); //output: ["Pineapple", "Mango", "Banana", "Watermelon"]

//Array method - includes: arr.includes(items,from)-looks for item starting from index from, returns true if found
let coba = [1, 0, false];
console.log(coba.includes(1)); //true

//Transform an Array - map: ngerubah masing2 elemen dari array dan ngembaliin array baru
let result = arr.map(function(item, index, array) {
    //return the new value instead of item
});

let length = ["Ani", "Doni", "Piter"].map(item => item.length);
console.log(length);  //output: 3,4,5

//Transform an Array - split and join: mau simpan sebagai array
let names = "Nina, Ammar, Fina";

let array = names.split(", ");
for(let name of array) {
    console.log(`A message to ${name}.`); //Output: A message to Nina (and other names)
}

//join
let name = ["Cecil", "Khalda", "Vega"]
let str = name.join("; "); //glue the array into a string using;
console.log(str); //Output: Cecil; Khalda; Vega

//Contoh split dan join
const sentence = "Hello,Kak!,How,Are,You";
const array1 = sentence.split(",");
const newSentence = array1.join(" ");

console.log(newSentence); //output: Hello kak! How are you (komanya jd ilang)

// ===========================================================================================================
//(BELAJAR OBJECT)

//Object - for in loop
let user = {          //an object
    name: "John",     //by key "name" store value "John"
    age: 30,          //by key "age" store value 30
    isAdmin: true
}

for (let key in user) {
    //keys
    console.log("key: " + key); //name, age, isAdmin
    //values for the keys
    console.log("value: " + user[key]); //output: key:name value: John, key:age value:30, key:isAdmin value:ture
}

//Contoh 
const car = {
    make: "Toyota",
    model: "Camry",
    year: "2022"
};

let result1 = "";
for (const key in car) {
    result1 += car[key] + " ";
}

console.log(result1); //output: Toyota Camry 2022

//Object methods - "this": menunjuk dirinya sendiri
let user2 = {
    name2: "Keshya",
    age2: 19,
    
    sayHi() {
        //"this" is the "current object"
        console.log(this.name2);
    }
};

user2.sayHi(); //output: Keysha

//Arrow functions have no "this"
let user3 = {
    firstName: "Yaya",
    sayHello() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user3.sayHello(); //output Yaya

//Contoh
const person = {
    firstName1: "Naila",
    lastName: "Mira",
    fullName: function() {
        return this.firstName1 + " " + this.lastName; 
        }
};

console.log(person.fullName());  //output: Naila Mira

//Array of objects: sering dipakai
const students = [
    {name4: "lala", age: 20, grade: "A"},
    {name4: "Jane", age: 19, grade: "B"},
    {name4: "Syali", age: 21, grade: "A+"},
    {name4: "Zaki", age: 18, grade: "B+"}
];

//Ambil grade dengan posisi pertama
students[1].grade

//Ambil nama2nya aja, pakai map
students.map(function(student){
    return students.name //output: ["lala", "jane", "syali", "zaki"]
});

//Contoh Array of object
const items = [
    {name5: "Apple", price: 2},
    {name5: "Banana", price: 1},
    {name5: "Cherry", price: 3},
];

const doubledPrices = items.map(item => ({
    name5: item.name5,
    doubledPrice: item.price * 2
}));

console.log(doubledPrices);

//Array Method - find and findIndex/ findLastIndex : sering dipakai juga
let result2 = arr.find(function(item, index, array) {
    //if true is returned, item is returned and iteration is stopped
    //for falsy scenario returns undefined
});

//Contoh Array Method - find
let user4 = [
    {id: 1, name6: "Nina"},
    {id: 2, name6: "Nasya"},
    {id: 3, name6: "Niken"},
];

// let users = user4.find(item => item.id == 1);
// console.log(users.name6); //output: Nina

let users = user4.find(item => item.name6 == "Kak Jihan");
console.log(users); //output: undefined, artinya gada datanya

//Contoh findIndex/findLastIndex
let user5 = [
    {id: 1, name7: "Lala"},
    {id: 2, name7: "Lili"},
    {id: 3, name7: "Lala"},
];

//find the index of the first Lala
console.log(user5.findIndex(users => users.name7 == "Lala"));  //output: 0

//find the index of the last Lala
console.log(user5.findLastIndex(users => users.name7 == "Lala"));  //output: 2

//Contoh
const students1 = [
    {name8: "Alice", nilai: 85},
    {name8: "Bob", nilai: 92},
    {name8: "Charlie", nilai: 78}
];

const passedStudent = students1.find(student => student.nilai >= 80);
console.log(passedStudent); //output: name8:"Alice", nilai: 85

//Contoh lagi
const products = [
    {id: 1, name: "Laptop", price:800},
    {id: 2, name: "Phone", price:400},
    {id: 3, name: "Tablet", price:300}
];

const indexofAffordableProduct =
products.findIndex(product => product.price <= 500);
console.log(indexofAffordableProduct); //output: 1

//Array Method - Filter: mnampilkan semua, hasilnya lebih dari satu, kembaliannya berupa array dari elemen yang ditemukan
let result3 = arr.filter(function(item, index, array) {
    //if true item is pushed to results and the iteration continues
    //returns empty array if nothing found
});

//(NOTES!)
//find kalo gaketemu: undefined
//findIndex/findLastIndex kalo gaketemu: -1
//filter kalo gaketemu: array kosong

//Contoh array method - filter
let users1 = [
    {id: 1, name: "John" },
    {id: 2, name: "Peter" },
    {id: 3, name: "Mary" }
];

//returns array of the first two users
let someUsers = users1.filter(item => item.id < 3);
console.log (someUsers.length); //output: 2

//Contoh terakhir
const fruits1 = [
    {name: "Apple", color: "Red"},
    {name: "Banana", color: "Yellow"},
    {name: "Cherry", color: "Red"}
];

const lastIndexofGreenFruit =
fruits.findLastIndex(fruit => fruit.color == "Green");
console.log(lastIndexofGreenFruit); //output: -1 karena green tidak ada dalam data jadinya -1

//SUMMARY
//We covered arrays and objects
//We learned how to access an array and objects
//We covered how to access object methods and this keyword

//Alhamdulillah istirahat....