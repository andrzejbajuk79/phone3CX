__author__ = 'abajuk'
from flask import Flask, render_template
from flask import send_from_directory
import requests
import json
import os

from time import gmtime, strftime




app = Flask(__name__, static_url_path='/static/')
app._static_folder = os.path.abspath("static/")
root_dir = os.path.dirname(os.getcwd())
#

@app.route('/')
def homepage():
    data = requests.get('http://172.31.6.132:50000/UserStatus')
    return render_template('phone/index.html',
                           data=json.loads(data.text),
                           timezone = strftime(" %H:%M:%S", gmtime()))
@app.route('/team_1')
def team_1():
    data = requests.get('http://172.31.6.132:50000/UserStatus')
    return render_template('phone/index1.html',data=json.loads(data.text))

@app.route('/static/<path:path>')
def send_js(path):
    return send_from_directory(os.path.join(root_dir, 'static', 'js'), path)

@app.route('/<filename>.css')
def stylesheets(filename):
    return send_from_directory(os.path.join(root_dir, 'static', 'css'), filename)



if __name__ == '__main__':
  app.run(host='127.0.0.1', debug=True)