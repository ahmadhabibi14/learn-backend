## Node.js Global Object

JavaScript hanyalah bahasa pemrograman. Ia tidak mengetahui apakah Anda menjalankannya menggunakan browser atau Node.js. Di browser, JavaScript dapat mengontrol fungsionalitas browser seperti mengunjungi halaman, memuat ulang, menutup tabs, serta menampilkan alert dialog. JavaScript mampu melakukan itu karena browser menambahkan objek `window` pada JavaScript.

Di Node.js pun demikian, ia menambahkan objek `global` guna memberikan fungsionalitas lebih pada JavaScript. Hal ini bertujuan untuk mendukung pengembangan pada environment-nya. Contoh, melalui objek global kita dapat melihat berapa CPU yang digunakan pada komputer, modularisasi berkas JavaScript, menampilkan nilai pada console, dan hal lainnya.

Objek `window` pada browser dan objek `global` pada Node.js merupakan Global Object. Seluruh fungsi atau properti yang menjadi member dari global object dapat diakses di mana saja alias memiliki cakupan global. Pada Node.js Anda bisa melihat apa saja yang termasuk member dari global objek dengan menggunakan kode berikut:

```js
Object.getOwnPropertyNames(global);
```

Banyak sekali yah member dari global objek. Namun dilansir dari website Node.js, sebenarnya mereka hanya menambahkan beberapa objek saja. Objek tersebut dinamakan dengan `true globals`. Berikut daftarnya :

- `global` : Global namespace. Member apa pun di dalam object ini dapat diakses pada cakupan global.
- `process` : menyediakan interaksi dengan proses Node.js yang berjalan.
- `console` : menyediakan berbagai fungsionalitas **STDIO**.
- `setTimeout`, `clearTimeout`, `setInterval`, `clearInterval`.

Ada juga objek yang merupakan `pseudo-globals` atau objek global semu. Objek ini tidak terlihat bila dicetak menggunakan Object.getOwnPropertyNames(global) sebab ia bukan member langsung dari objek global, melainkan diturunkan dari cakupan module. Karena pada Node.js semua berkas JavaScript adalah module, jadi pseudo-globals dapat diakses layaknya global objek. Berikut daftarnya:

- `module` : digunakan untuk sistem modularisasi pada Node.js.
- `__filename` : keyword untuk mendapatkan lokasi berkas JavaScript yang dieksekusi. Keyword ini tidak tersedia pada Node.js REPL.
- `__dirname` : keyword untuk mendapatkan root directory dari berkas JavaScript yang dieksekusi.
- `require` : digunakan untuk mengimpor module JavaScript.

