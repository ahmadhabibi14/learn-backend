const EventMitter = require('events');

const myEventMitter = new EventMitter();

const makeCoffee = (name) => {
   console.log(`Kopi ${name} telah dibuat`);
};

const makeBill = (price) => {
   console.log(`Bill sebesar ${price} telah dibuat`);
}

const onCoffeeOrderedListener = ({ name, price }) => {
   makeCoffee(name);
   makeBill(price);
}

myEventMitter.on('coffee-order', onCoffeeOrderedListener);

myEventMitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });