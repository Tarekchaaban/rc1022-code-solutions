const fs = require('fs');
const object = require('./data.json');
if (process.argv[2] === 'delete') {
  delete object.notes[process.argv[3]];

  const data = JSON.stringify(object, null, 2);
  fs.writeFile('data.json', data, 'utf-8', err => {
    if (err) throw err;
  });
}
