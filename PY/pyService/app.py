import requests, os
from flask import Flask
app = Flask(__name__)


try:
    url = os.environ.get("JSMICRO_PORT")
    jsHost = os.environ.get("JSMICRO_SERVICE_HOST")
    jsPort = os.environ.get("JSMICRO_SERVICE_PORT")
except:
    url = "http://fb.com"

@app.route('/')
def hello():
    print(jsHost, jsPort)
    data = requests.get(f"http://{jsHost}:{jsPort}/")
    print(data.text)
    return  f"FLAAAAASK made a request to {data}"

if __name__ == '__main__':
    app.run(
        host= '0.0.0.0', 
        port="9090", 
        debug=False)