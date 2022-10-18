function convertMinutesToSeconds(minutes) {
  var conversion = minutes * 60;
  return conversion;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(2);
console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResult);

function greet(name) {
  var sayHey = 'Hey, ' + name + '.';
  return sayHey;
}

var greetingBeavis = greet('Beavis');
console.log('greetingBeavis:', greetingBeavis);

function getArea(width, height) {
  var widthTimesHeight = width * height;
  return widthTimesHeight;
}

var areaCalculated = getArea(17, 42);
console.log('areaCalculated:', areaCalculated);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var personOne = {
  firstName: 'Tarek',
  lastName: 'Chaaban'
};

var personOneFirstName = getFirstName(personOne);

console.log('personOneFirstName:', personOneFirstName);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var arrayOne = ['Tarek', 'Baron', 'Cody'];
var arrayOneLastElement = getLastElement(arrayOne);
console.log('arrayOneLastElement:', arrayOneLastElement);
