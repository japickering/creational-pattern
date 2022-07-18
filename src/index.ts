import Bike from './classes/Bike';

const townBike = new Bike('town bike', 12, 299, false);

console.log(townBike.getName());
console.log('has gears ', townBike.getGears());
console.log('lock fitted ', townBike.isLockFitted());
console.log('price ', townBike.getPrice());
