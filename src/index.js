const express = require('express');
//
const inventoryRouter = require('../src/controllers/adminform/inventory.router');
//
const restRouter = express.Router();
//
restRouter.use('/inventory',inventoryRouter);
//
module.exports = restRouter;