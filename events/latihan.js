const EventMitter = require('events');
const birthdayEventListener = (name) => {
   console.log(`Happy birthday ${name}!`);
};

const myEmitter = new EventMitter();

myEmitter.on('birthday', birthdayEventListener);
myEmitter.emit('birthday', 'Habi');