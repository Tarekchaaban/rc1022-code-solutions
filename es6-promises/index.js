const takeAChance = require('./take-a-chance');
const promise = takeAChance('Tarek');

promise.then(value => {
  console.log(value);
});

promise.catch(error => {
  console.error(error.message);
});
