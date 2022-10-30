const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homer);
route.get('/admin',services.adminer);
route.get('/users',services.userer);
route.get('/create', services.create)
route.get('/update', services.update)
route.get('/allentries',services.allentries);
// API
//route.post('/api/entries', controller.entries);
route.get('/api/entries', controller.entries);
route.post('/api/saventry',controller.saventry);
route.put('/api/entries/:id', controller.update);
route.delete('/api/entries/:id', controller.delete);
//route.delete('/api/users/:id', controller.delete);

module.exports = route