import requests, os, json
from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/')
def hello():
    return "Flask API home"

@app.route('/resource')
def getResource():
    return jsonify({"specialPythonData": 983257487})

if __name__ == '__main__':
    app.run(
        host= '0.0.0.0', 
        port="9090", 
        debug=False)