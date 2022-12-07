const fs = require('fs');
const object = require('./data.json');
if (process.argv[2] === 'update') {
  object.notes[process.argv[3]] = process.argv[4];

  const data = JSON.stringify(object, null, 2);
  fs.writeFile('data.json', data, 'utf-8', err => {
    if (err) throw err;
  });
}
