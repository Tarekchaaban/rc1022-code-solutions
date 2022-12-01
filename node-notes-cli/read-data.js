const fs = require('fs');
const object = require('./data.json');
if (process.argv[2] === 'read') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    for (var key in object.notes) {
      console.log(`${key}: ${object.notes[key]}`);
    }
  });
}
