const express = require('express');
const app = express();
const json = express.json();
app.use(json);
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
app.listen(3000, () => {
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
      `;
  db.query(sql)
    .then(result => {
      res.status(200);
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const scoreNumber = Number(req.body.score);
  if ((!req.body.name) || (!req.body.course) || (!req.body.score) || (!Number.isInteger(scoreNumber)) || scoreNumber < 0 || scoreNumber > 100) {
    res.status(400).json({
      error: 'Request to post is missing at least one of the following: name, course, score. OR the score needs to be a positive integer between 0 and 100'
    });
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values               ($1, $2, $3)
    returning *
    `;
  const valuesArray = [req.body.name, req.body.course, req.body.score];
  db.query(sql, valuesArray)
    .then(result => {
      res.status(201);
      res.json(result.rows[0]);

    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const scoreNumber = Number(req.body.score);
  const gradeId = Number(req.params.gradeId);
  if ((!req.body.name) || (!req.body.course) || (!req.body.score) || (!Number.isInteger(scoreNumber)) || scoreNumber < 0 || scoreNumber > 100 || gradeId < 1) {
    res.status(400).json({
      error: 'Request to post is missing at least one of the following: name, course, score. OR the score needs to be a positive integer between 0 and 100'
    });
  }
  const sql = `
    update "grades"
    set    "name" = $1,
           "course" = $2,
           "score" = $3
    where  "gradeId" = $4
    returning *
    `;
  const valuesArray = [req.body.name, req.body.course, req.body.score, req.params.gradeId];
  db.query(sql, valuesArray)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(201);
        res.json(result.rows[0]);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (gradeId < 1) {
    res.status(400).json({
      error: 'Invalid GradeId'
    });
  }
  const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *
    `;
  const valuesArray = [req.params.gradeId];
  db.query(sql, valuesArray)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.sendStatus(204);
        res.json(result.rows[0]);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});
