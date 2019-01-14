const config = require("./key.js")
const isDev = typeof process.env["KUBERNETES_SERVICE_HOST"] !== "undefined";
const globalConfig = isDev ? config.production : config.development;
module.exports = globalConfig;