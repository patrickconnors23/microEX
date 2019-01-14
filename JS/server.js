'use strict';
const express = require('express');
const axios = require('axios');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const pyURL = process.env.PYMICRO_5DBD6B6986_B77DK_PORT_9090_TCP_ADDR;

// App
const app = express();
app.get('/', (req, res) => {
  console.log(pyURL);
  axios.get(pyURL)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  res.send("change rocks\n");
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