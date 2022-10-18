var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('The name of the author of the second book is:', bookshelf[1].author);
console.log('The ISBN of the first book is:', bookshelf[0].isbn);
console.log('The title of the third book is:', bookshelf[2].title);

var orderHistory = [
  {
    type: 'Book',
    name_of_product: 'The Art of Sql',
    author: 'Stephane Faroult',
    date_placed: 'July 3rd 2020',
    date_delivered: 'July 5th 2020',
    return_window: 'August 4th 2020',
    ship_to: 'JS Masher',
    order_num: 2648248,
    price: 33.99
  },
  {
    type: 'Gaming Hardware',
    name_of_product: 'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
    author: null,
    date_placed: 'July 3rd 2020',
    date_delivered: 'July 5th 2020',
    return_window: 'August 4th 2020',
    ship_to: 'JS Masher',
    order_num: 2648248,
    price: 94.95
  },
  {
    type: 'Gaming Hardware',
    name_of_product: 'Gamecube Controller Adapter, Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Drive and No Lag-Gamecube Adapter',
    author: null,
    date_placed: 'July 4rd 2020',
    data_delivered: 'July 7th 2020',
    return_window: 'August 5th 2020',
    ship_to: 'JS Masher',
    order_num: 9059409,
    price: 15.98
  },
  {
    type: 'Book',
    name_of_product: 'The Timeless Way of Building',
    author: 'Christopher Alexander',
    date_placed: 'July 19rd 2020',
    data_delivered: 'July 20th 2020',
    return_window: 'August 19th 2020',
    ship_to: 'JS Masher',
    order_num: 1280257,
    price: 41.53
  },
  {
    type: 'Book',
    name_of_product: 'JavaScript for impatient programmers',
    author: 'Dr. Axel Rauschmayer',
    date_placed: 'August 4th 2020',
    data_delivered: 'August 8th 2020',
    return_window: 'September 7th 2020',
    ship_to: 'JS Masher',
    order_num: 8772232,
    price: 31.55
  }
];
