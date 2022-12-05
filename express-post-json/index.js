const express = require('express');
let nextId = 1;
const grades = {};
const app = express();
const json = express.json();
app.use(json);

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (var key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.listen(3000, () => {
});

app.post('/api/grades', (req, res) => {
  res.status(201);
  req.body.Id = nextId;
  grades[nextId] = req.body;
  res.json(req.body);
  nextId++;
});
