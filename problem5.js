const inventory = require('./inventory');

function findOlderCars(inventory, year) {
  const olderCars = inventory.filter((car) => car.car_year < year);
  return olderCars;
}

module.exports = findOlderCars;
