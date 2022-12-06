const express = require('express');
const app = express();
const data = require('./data.json');
const json = express.json();
const fs = require('fs');
app.use(json);

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (var key in data.notes) {
    notesArray.push(data.notes[key]);
  }
  res.json(notesArray);
});

app.listen(3000, () => {
});

app.get('/api/notes/:id', (req, res) => {
  const idNumber = Number(req.params.id);
  if (!(idNumber > 0)) {
    res.status(400);
    const err400 = { error: 'id must be a positive integer' };
    res.send(err400);
  } else if (!data.notes[idNumber]) {
    const err404 = { error: 'cannot find note with id ' };
    err404.error += idNumber;
    res.status(404);
    res.send(err404);
  } else {
    res.json(data.notes[idNumber]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400);
    const err400 = { error: 'Request did not include content' };
    res.send(err400);
  } else {
    res.status(201);
    req.body.id = data.nextId;
    data.notes[data.nextId] = req.body;
    data.nextId++;
    const dataString = JSON.stringify(data, null, 2);
    const err500 = { error: 'An unexpected error occurred.' };
    fs.writeFile('data.json', dataString, 'utf-8', err => {
      if (err) {
        res.status(500);
        console.error(err);
        res.json(err500);
      } else {
        res.status(200);
        res.json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const idNumber = Number(req.params.id);
  if (!(idNumber > 0)) {
    res.status(400);
    const err400 = { error: 'id must be a positive integer' };
    res.send(err400);
  } else if (!data.notes[idNumber]) {
    const err404 = { error: 'cannot find note with id ' };
    err404.error += idNumber;
    res.status(404);
    res.send(err404);
  } else {
    delete data.notes[req.params.id];
    const dataString = JSON.stringify(data, null, 2);
    const err500 = { error: 'An unexpected error occurred.' };
    fs.writeFile('data.json', dataString, 'utf-8', err => {
      if (err) {
        res.status(500);
        console.error(err);
        res.json(err500);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const idNumber = Number(req.params.id);
  if ((!(idNumber > 0)) || (!req.body.content)) {
    res.status(400);
    const err400 = { error: 'id must be a positive integer or content is missing' };
    res.send(err400);
  } else if (!data.notes[idNumber]) {
    const err404 = { error: 'cannot find note with id ' };
    err404.error += idNumber;
    res.status(404);
    res.send(err404);
  } else {
    req.body.id = idNumber;
    data.notes[idNumber] = req.body;
    const dataString = JSON.stringify(data, null, 2);
    const err500 = { error: 'An unexpected error occurred.' };
    fs.writeFile('data.json', dataString, 'utf-8', err => {
      if (err) {
        res.status(500);
        console.error(err);
        res.json(err500);
      } else {
        res.sendStatus(204);
      }
    });
  }
});
