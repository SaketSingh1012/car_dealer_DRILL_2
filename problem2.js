const inventory = require('./inventory');

function findLastCar(inventory) {
  const lastCar = inventory[inventory.length - 1];
  return `Last car is a ${lastCar.car_make} ${lastCar.car_model}`;
}

module.exports = findLastCar;
