const express = require('express');
const app = express();
const appHelper = require('./app');

app.set('views', './views');
app.use(express.static('./public'));
