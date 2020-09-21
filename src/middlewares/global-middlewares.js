const express = require("express");
const cors = require("cors");
const logger = require("morgan");
//
exports.setGlobalMiddlewares = (app) => {
  
  app.use(cors());
  app.use(express.json({ extended: false }));
  app.use(express.urlencoded());
 
  app.use(logger("dev"));
};
