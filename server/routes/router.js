/**
 * This file imports functions from different files 
 * and run the function when user goes to a certain route
 **/

const express = require('express');
const route = express.Router();

// renderer functions
const services = require('../services/render');

// crud functions
const controller = require('../controller/controller');

//############### router declarations ###################
// invokes when someone navigates to the defined route
/**
 * @description home route
 * @method GET /
 */
route.get("/",controller.find);

//############### controller methods ###################
// - invokes when someone makes a request
route.get("/api/products", controller.find); 

module.exports = route;