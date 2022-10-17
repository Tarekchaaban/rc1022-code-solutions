var student = {
  firstName: 'Tarek',
  lastName: 'Chaaban',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Loan Officer';

console.log('Value of livesInIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2019
};

vehicle['color'] = 'Gray';
vehicle['isConvertible'] = false;

console.log('Value of color:', vehicle['color']);
console.log('Value of isConvertible:', vehicle['isConvertible']);

console.log('Value of vehicle:', vehicle);

var pet = {
  name: 'Judy',
  type: 'Cat'
};

delete pet.name;
delete pet.type;

console.log('Value of pet:', pet);
