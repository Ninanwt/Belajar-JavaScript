//Belajar bikin module bareng kak icanq suhu backend :)
//jenis module: user-created module
//module sendiri
//private modules

//Coba perhitungan
function tambah(a, b) {
    return a + b;
}

function kurang (a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

//bikin variable
const passwordnyaApa = "kopi nikmat ga bikin kembung"

//Coba lagi
const manusia = {
    nama: "hayo siapa",
    umur: 20,
    pekerjaan: "tidur",
}

// apabila kita ingin membuat sebuah variabel, atau sebuah fungsi, atau sebuah objek atau kelas yang ingin kita pakai di file yang lain, kita harus membuat si variabel/fungsi/objek atau apapun itu menjadi sebuah module. Gimana cara bikin si function tambah di atas menjadi sebuah module? caranya adalah
   
module.exports = {tambah, kurang, kali, passwordnyaApa, manusia}; // ini adalah cara untuk membuat sebuah module