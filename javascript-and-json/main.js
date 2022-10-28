var books = [
  {
    isbn: '12345',
    title: 'Series of Unfortunate Events',
    author: 'Lemony Snicket'
  },
  {
    isbn: '54321',
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  },
  {
    isbn: '12543',
    title: 'The Fault in Our Stars',
    author: 'John Green'
  }
];

console.log('Array books is equal to: ', books);
console.log('books typeof: ', (typeof books));

var stringifyBooks = JSON.stringify(books);

console.log('JSON string books is equal to: ', stringifyBooks);
console.log('books typeof: ', (typeof stringifyBooks));

var stringifyStudent = '{"ID":"12345","Name":"Tarek"}';
console.log('stringifyStudent: ', stringifyStudent);
console.log('Type of stringifyStudent: ', (typeof stringifyStudent));

var parsedStudent = JSON.parse(stringifyStudent);

console.log('parsedStudent: ', parsedStudent);
console.log('parsedStudent typeof: ', (typeof parsedStudent));
