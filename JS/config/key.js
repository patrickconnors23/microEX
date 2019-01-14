module.exports = {
    // Hit public endpoint when in development
    "development": {
        "pyMicroHost": "35.225.29.171",
        "pyMicroPort": "9090"
    },
    // Hit cluster endpoint
    "production": {
        "pyMicroHost": process.env["PYMICRO_SERVICE_HOST"],
        "pyMicroPort": process.env["PYMICRO_SERVICE_PORT"]
    },
}