from flask_cors import CORS
from flask import Flask, request, render_template, json, jsonify, send_from_directory, Response
import json
import numpy as np
import io
import os

app = Flask(__name__)
CORS(app)

cf_port = os.getenv("PORT")

@app.route('/')
def func():
    content = open('index.html').read()
    return Response(content, mimetype="text/html")

@app.route('/model')
def model():
    json_data = json.load(open("./model_js/model.json"))
    return jsonify(json_data)

@app.route('/<path:path>')
def load_shards(path):
    return send_from_directory('model_js', path)

if __name__ == "__main__":
    app.run()
    '''
    if cf_port != 0:
        app.run(host='0.0.0.0', port=cf_port)
    else:
        app.run()
    '''
