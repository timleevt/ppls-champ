import os
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_restful import Api
from flask_cors import CORS, cross_origin
from .db import db
from .resources.boxerranking import BoxerRanking
from .resources.userlist import UserList
from .resources.userlist import UsersList
from .resources.community import CommunityList

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)
app.config['SECRET_KEY'] = os.getenv('SECRET')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL') or 'postgresql://postgres:postgres@localhost:5432/ppls_champ'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['CORS_HEADERS'] = 'Content-Type'

# Initialization
ma = Marshmallow(app)
api = Api(app)
db.init_app(app)

# Resources
api.add_resource(BoxerRanking, '/rankings/<string:website>')
api.add_resource(UserList, '/userlist')
api.add_resource(UsersList, '/userlist/<string:name>')
api.add_resource(CommunityList, '/community')

@app.before_first_request
def create_tables():
    db.create_all()

@app.route("/")
@cross_origin()
def index():
    return app.send_static_file('index.html')
