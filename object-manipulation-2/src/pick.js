/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

/* var object = {
  name: 'Tarek',
  lastName: 'Chaaban',
  pet: 'Cat'
};
var keyArray = ['name', 'pet'];

console.log(pick(object, keyArray)); */
