const express = require('express');
const routes = express.Router();

const AnnotetionController = require('./controllers/AnnotetionController');
const PriorityContoller = require('./controllers/PriorityContoller');
const ContentController = require('./controllers/ContentController');

//Rota annotetions
routes.post('/annotetions', AnnotetionController.create);
routes.get('/annotetions', AnnotetionController.read);
routes.delete('/annotetions/:id', AnnotetionController.delete);

//Rota priority
routes.get('/priorities', PriorityContoller.read);
routes.post('/priorities/:id', PriorityContoller.update);

//Rota content
routes.post('/contents/:id', ContentController.update);

module.exports = routes;

