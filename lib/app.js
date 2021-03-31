const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

app.use('api/v1/files', require('./controllers/files'))

module.exports = app;
