//Lecture 4 - JavaScript DOM Manipulation
//=========================================================================================================

//DOM (Document Object Model): sebuah API yang memberikan cara yang standar untuk mengakses dan memanipulasi elemen di javascript, attributes, dan content yang ada di web document.
//In the DOM, each HTML element is represented as a node.
//The DOM represents the structure of an HTML document as a tree-like structure.
//Each element, attribute, and text node in an HTML document becomes a node in the DOM tree.
//JavaScript provides powerful tools to access, manipulate, and update the DOM dynamically.

//Cara panggil DOM 
//(Belajar Selecting the DOM)

// document.getElementsByClassName()
// document.getElementsByName()
// document.getElementsByTagName()
// document.getElementById()

//Cara pertama: ambil form
let form = document.getElementsByName("my-form")[0];
// console.log(form);

//Coba ambil articles: ingin melihat ada brp banyak isi articles yg ke ambil dari form dg class name articles
// let articles = form.getElementsByClassName("article");
// console.log(articles.length); //output: 2, karena di body kita di dalam form dengan name = "my-form" itu punya 2 kelas articles

//Coba ambil semua elemen dengan tag name div (ada brp banyak div di dlm code)
let articles = form.getElementsByTagName("div");
console.log(articles.length); //output: 2, karena di body div ada dua
//====================================================================================================================================================

//(Belajar querySelector): panggil yang sesuai dengan selector css nya

document.querySelector('#myButton') //id pakai tanda pagar(#)
document.querySelectorAll('.myClass'); //class pakai titik(.)
document.querySelector('div > p');  //ambil anak lsg dalam bentuk p dari seluruh div, maka pakai tanda lebih besar (>)

//querySelector: ambil yang pertama
//querySelectorALL: ambil lebih dari satu
//=====================================================================================================================================================

//(createElement & appendChild): membuat elemnt baru dan menambahkannya di akhir list

let div = document.createElement('div');

//Add an HTML snippet to th div:
div.innerHTML = '<p>CreateElementexample</p>';

//To attach the div to the document, you use the appendChild() method:
document.body.appendChild(div);

//If you want to add an id to a div, you set the id attribute of the elemnt to a value, like this:
div.id = 'content';



