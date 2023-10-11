const findBMWAndAudi = require('./problem6');
const inventory = require('./inventory');

const result = findBMWAndAudi(inventory);
console.log(JSON.stringify(result, null, 2));
