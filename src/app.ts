import express from 'express';
import Bike from './classes/Bike';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`server is listening at http://localhost:${port}`);
});

const townBike = new Bike('town bike', 12, 299);

console.log('bike name: ' + townBike.getName());
console.log('has gears: ', townBike.getGears());
console.log('price: £ ', townBike.getPrice());
