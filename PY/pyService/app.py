import requests, os
from flask import Flask
app = Flask(__name__)


url = os.environ["NODE_URL"]

@app.route('/')
def hello():
    data = requests.get(f"{url}/resource")
    return  f"FLAAAAASK made a request to {data}"

if __name__ == '__main__':
    app.run(
        # host= '0.0.0.0', 
        port="9090", 
        debug=True)