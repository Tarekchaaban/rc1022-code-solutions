function ExampleConstructor() {}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var exampleConstructorNew = new ExampleConstructor();
console.log(exampleConstructorNew);

var isInstanceOf = exampleConstructorNew instanceof ExampleConstructor;
console.log(isInstanceOf);
