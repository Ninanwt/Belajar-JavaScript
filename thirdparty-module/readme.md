# Step by step menggunakan module dari npm

kita harus inisiasi project npm

1. `npm init -y` atau terserah mau `npm init` aja juga boleh
2. bikin file js utama atau yang biasa disebut dengan file entry point, boleh namainnya `index.js` atau `app.js` atau `main.js`
3. bisa langsung aja install module yang kalian ingin, dengan cara `npm install <nama module yang mau diinstall>`
4. setelah install module yang tadi kalian run di terminal lewat command `npm install <nama modulenya>` secara otomatis akan membuat
   a. satu folder namanya node_modules yang isinya adalah module yang dibikin sama orang lain itu yang kita install, jadi jangan diubah
   b. satu file namanya `package-lock.json` dimana berisi tentang apa yang sudah kita install, beserta module yang diinstall sama module yang kalian install 