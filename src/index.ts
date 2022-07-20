// Factory design pattern in Typescript
import BikeFactory from './classes/BikeFactory';
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`server is listening at http://localhost:${port}`);
});

// create factory instance and set a default bike type for simplicity
const factory = new BikeFactory('town');

const townBike = factory.create('town');
console.log('bike name:' + townBike?.getName());
console.log('gears:', townBike?.getGears());
console.log('price: £', townBike?.getPrice());
console.log('----------------------------------');
const mtb = factory.create('mtb');
console.log('bike name:' + mtb?.getName());
console.log('gears:', mtb?.getGears());
console.log('price: £', mtb?.getPrice());
console.log('----------------------------------');
const hardtail = factory.create('hardtail');
console.log('bike name:' + hardtail?.getName());
console.log('gears:', hardtail?.getGears());
console.log('price: £', hardtail?.getPrice());
