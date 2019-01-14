'use strict';
const express = require('express');
const axios = require('axios');
const async = require('async');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const pyClient = require("./client/pyClient.js");

// App
const app = express();

app.get('/', (req, res) => {
  res.send("Welcome to the node.js api\n");
});

app.get('/resource', async (req, res) => {
  const data = await pyClient.getResource();
  res.send(data);
});

app.listen(PORT, HOST,  () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});