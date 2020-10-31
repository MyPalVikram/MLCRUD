const express = require('express');
const path = require('path');

const movies = require('./controllers/movies.js');
const db = require('./db/connection.js');

const app = express();
const PORT = 8080;

const publicDirectory = path.join(__dirname, '../client/dist');

app.use(express.static(publicDirectory));

app.get('/movies', movies.get);

app.listen(PORT);