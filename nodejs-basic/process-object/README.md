## Process Object

Salah satu global objek yang penting untuk diketahui adalah process. Dalam ilmu komputer, process adalah sebuah program yang dijalankan pada satu atau lebih thread. Anda bisa melihat proses yang sedang berjalan pada komputer Anda melalui Task Manager (Windows), System Monitor (Ubuntu), atau Activity Monitor (macOS).

Pada Node.js, global objek `process` memiliki fungsi dan properti yang dapat memberikan informasi mengenai proses yang sedang berjalan.

Salah satu yang sering digunakan adalah properti `process.env`. Melalui properti ini kita dapat menyimpan nilai atau mendapatkan informasi mengenai environment yang digunakan selama proses sedang berlangsung. Contoh, `process.env` memiliki properti `process.env.PWD` yang menyediakan informasi mengenai lokasi di mana proses dijalankan; properti `process.env.USER` menyimpan informasi nama user pada komputer Anda; dan masih banyak properti lainnya. Anda bisa lihat daftar lengkap properti yang ada pada halaman [dokumentasi Node.js mengenai process.env](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env).

Anda juga bisa secara manual menyimpan nilai di dalam `process.env`. Hal ini berguna untuk menentukan alur code seperti if-else dalam program berdasarkan environment yang Anda berikan. Contohnya, ketika Anda ingin nilai variabel host berbeda di kala pengembangan (development) dan produksi (production), Anda bisa membuat properti `NODE_ENV` pada `process.env`. Jadi, Anda bisa menentukan nilai host berdasarkan kondisi `NODE_ENV`.

```js
const server = new Server({
   host: process.env.NODE_ENV !== "production" ? "localhost" : "habibi2004.tech",
});
```

Untuk memberikan nilai pada properti process.env, kita dapat memberikannya ketika mengeksekusi berkas JavaScript. Caranya seperti ini:

```js
NODE_ENV = production node app.js
```

Nilai yang ada pada process.env hanya dapat diakses di dalam cakupan proses Node.js. Itu berarti Anda tidak dapat menggunakan nilainya pada program lain seperti menampilkan nilainya melalui program echo.

```js
// perintah ini tidak akan berjalan
node -e 'process.env.foo = "bar"' && echo $foo
```

Selain untuk menetapkan dan mendapatkan informasi mengenai environment, objek `process` memiliki kegunaan lain. Salah satunya adalah mendapatkan informasi tentang penggunaan CPU ketika proses berjalan. Anda dapat mengakses informasi tersebut melalui fungsi `process.memoryUsage()`.

```js
const cpuInformation = process.memoryUsage();
 
console.log(cpuInformation);
 
/* output
{
  rss: 14569472,
  heapTotal: 2654208,
  heapUsed: 1788896,
  external: 855681,
  arrayBuffers: 9898
}
*/
```

Yang terakhir dan tak kalah pentingnya adalah properti `process.argv`. Properti ini dapat menampung nilai baris perintah dalam bentuk array ketika menjalankan proses. Contoh jika kita menjalankan baris perintah berikut:

```js
node app.js harry potter
```

Maka array `process.argv` akan bernilai:
- Elemen pertama : Alamat (path) lengkap dari lokasi node yang menjalankan prosesnya.
- Element kedua : Alamat (path) berkas JavaScript yang dieksekusi (app.js)
- Element ketiga : “harry”
- Element keempat : “potter”

Bila app.js memiliki kode seperti ini:

```js
const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);
```

Maka output yang dihasilkan tampak seperti ini:

```js
Hello harry potter
```

### Tantangan: Process Object

Anda sudah mengenal process object yang ada di Node.js. Agar lebih paham lagi, sekarang giliran Anda untuk coba sendiri penggunaan dari beberapa global object yang ada di Node.js.

Untuk tantangan kali ini, buatlah berkas index.js baru di dalam folder baru process-object pada proyek nodejs-basic.

Kemudian, tuliskan starter code berikut pada `index.js`.

```js
const initialMemoryUsage = // TODO 1
const yourName = // TODO 2
const environment = // TODO 3
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = // TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
```

Selesaikan kode yang ditandai TODO dengan ketentuan berikut:

- TODO 1 : Isi dengan nilai `heapUsed` dari instance `process.memoryUsage`.
- TODO 2 : Isi dengan nilai index ke-2 dari `process.argv`.
- TODO 3 : Isi dengan nilai `NODE_ENV` dari `process.env`.
- TODO 4 : Isi dengan nilai `heapUsed` dari instance `process.memoryUsage`.

Setelah mengerjakan seluruh TODO, eksekusi berkas JavaScript dengan perintah: 

```sh
NODE_ENV=development node ./process-object/index.js Habibi
```