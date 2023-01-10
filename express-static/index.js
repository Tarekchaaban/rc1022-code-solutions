const express = require('express');
const app = express();
const path = require('path');

const joinedPath = (path.join(__dirname, 'public'));
console.log(joinedPath);
const staticPath = express.static(joinedPath);
console.log(staticPath);
app.use(staticPath);
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
});
