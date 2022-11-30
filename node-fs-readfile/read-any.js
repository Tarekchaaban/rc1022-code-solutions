const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

/* if (process.argv[2] === 'dijkstra.txt') {
  fs.readFile('./dijkstra.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
if (process.argv[2] === 'hopper.txt') {
  fs.readFile('./hopper.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
if (process.argv[2] === 'hipster-ipsum.txt') {
  fs.readFile('./hipster-ipsum.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
if (process.argv[2] === 'cunningham.txt') {
  fs.readFile('./cunningham.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
} */
