const fs = require('fs');
const path = require('path');

const fileReadCallback = (error, data) => {
   if (error) {
      console.log('Gagal membaca berkas');
      return;
   }
   console.log(data)
}

fs.readFile('/home/habibi/Documents/CV_Resume/CV Software Engineer - Ahmad Habibi.pdf', 'UTF-8', fileReadCallback);


// Menggunakan Method
// path.resolve(__dirname, 'notes.txt')



