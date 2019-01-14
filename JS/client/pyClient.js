const axios = require("axios");
const config = require("../config/config.js");

var pyClient = {
    url:  "http://"+config.pyMicroHost+":"+config.pyMicroPort,
    GET: (endpoint) => {
        return axios.get(pyClient.url+"/"+endpoint)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return {}
            });
    },
    getResource: () => {
        return pyClient.GET("resource");
    }
}

module.exports = pyClient;