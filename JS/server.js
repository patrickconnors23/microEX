'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send("XYZ rocks\n");
  console.log("DockerJS, baby");
});

app.get('/resource', (req, res) => {
  res.send("No mas\n");
  console.log("DockerJS, baby");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log("DockerJS");

// docker run -p 49160:8080 -d <your username>/node-web-app