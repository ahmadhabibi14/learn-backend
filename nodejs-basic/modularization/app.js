const coffee = require('./lib/coffee');
const {firstName, lastName} = require('./lib/user')

console.log(`
   +======================================+
   Nama Kopi \t: ${coffee.name}
   Harga \t: ${coffee.price}
   Pembeli \t: ${firstName} ${lastName}
   +======================================+
`);