'use strict';

// Modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const TodoUser = require("./model/todouser");

// Configs
const dbConfig = require("./dbConfig");

const app = express();
const router = express.Router();

const port = process.env.API_PORT || 3001;

mongoose.connect(`mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.url}:${dbConfig.port}/${dbConfig.name}`);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());