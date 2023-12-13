const express = require('express');
const routes = express.Router();

const AnnotetionController = require('./controllers/AnnotetionController')

//Rota annotetions
routes.get('/annotetions', AnnotetionController.create);

module.exports = routes;

