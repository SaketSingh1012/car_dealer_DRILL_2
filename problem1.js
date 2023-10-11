const inventory = require('./inventory');

function findCarById(inventory, id) {
  const car = inventory.find((car) => car.id === id);
  return car ? `Car ${id} is a ${car.car_year} ${car.car_make} ${car.car_model}` : 'Car not found';
}

module.exports = findCarById;
