const express = require('express');
const routes = express.Router();

const AnnotetionController = require('./controllers/AnnotetionController');
const PriorityContoller = require('./controllers/PriorityContoller');

//Rota annotetions
routes.post('/annotetions', AnnotetionController.create);
routes.get('/annotetions', AnnotetionController.read);
routes.delete('/annotetions/:id', AnnotetionController.delete);

//Rota priority
routes.get('/priorities', PriorityContoller.read);

module.exports = routes;

