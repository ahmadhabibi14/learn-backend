# Writable Stream

Pada materi sebelumnya kita sudah belajar bagaimana membaca berkas menggunakan teknik stream (readable stream). Tapi apakah Anda tahu bahwa teknik stream juga dapat digunakan untuk menulis berkas? Teknik ini disebut writable stream.

Untuk membuat writable stream dalam menulis berkas gunakanlah method `createWriteStream()` dari core module `fs`.

```js
const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');
```

Fungsi ini menerima satu argumen yakni alamat berkas untuk menyimpan hasil data yang dituliskan. Berkas output akan dibuat secara otomatis jika tidak ada, namun bila berkas tersebut sudah ada, maka data sebelumnya akan tertimpa! Anda harus hati-hati yah!

Lalu untuk menuliskan data pada writable stream, gunakan method `write()`.

```js
const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');
 
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end();
```

Method `end()` digunakan untuk menandakan akhir dari writable stream sekaligus bisa digunakan sebagai penulisan writeable terakhir.

```js
const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');
 
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!');
```

Kode di atas akan menghasilkan output.txt dengan data seperti ini:

```txt
Ini merupakan teks baris pertama!
Ini merupakan teks baris kedua!
Akhir dari writable stream!
```

### Latihan: Stream

Sebelum mengakhiri modul ini, mari kita latihan lagi ya. Karena Anda sudah belajar teknik stream baik readable stream ataupun writable stream, kini saatnya kita praktikkan apa yang sudah Anda pelajari.

Kita akan kombinasikan kedua teknik tersebut untuk membuat program membaca teks dan memodifikasinya melalui teknik stream.

Silakan buat folder baru dengan nama stream. Di dalamnya buat dua berkas baru dengan nama index.js dan input.txt.

```js
/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
```

Seperti yang tertera pada berkas index.js, tugas Anda yaitu untuk membuat program membaca dan menulis ulang teks melalui stream dengan ketentuan berikut:

- Teks yang dibaca oleh readable stream memiliki ukuran 15 karakter tiap bagiannya. Tentukan nilai `highWaterMark`-nya.
- Tulis ulang teks dengan menggunakan teknik writable stream pada berkas output.txt. Untuk tiap bagian teks yang dibaca melalui readable stream, pisahkan dengan baris baru `(‘\n’)`.

Bila TODO selesai Anda kerjakan, maka eksekusi berkas index.js dengan menggunakan perintah:

```sh
node ./stream/index.js
```

Setelah mengeksekusi berkas tersebut, maka akan tercipta berkas baru dengan nama `output.txt`