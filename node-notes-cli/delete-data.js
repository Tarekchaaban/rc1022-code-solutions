const fs = require('fs');
const object = require('./data.json');
if (process.argv[2] === 'delete') {
  for (var key in object.notes) {
    if (key === process.argv[3]) {
      object.nextId--;
      delete object.notes[key];
    }
  }

  const data = JSON.stringify(object, null, 2);
  fs.writeFile('data.json', data, 'utf-8', err => {
    if (err) throw err;
  });
}
