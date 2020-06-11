import os
from db import db
from decouple import config
from flask import Flask, jsonify, request
from flask_restful import Api
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from resources.boxerranking import BoxerRanking
from resources.userlist import UserList
from resources.userlist import UsersList
from resources.community import CommunityList

# Configuration
app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = config('SECRET')
# app.config['SECRET_KEY'] = os.getenv('SECRET')

# Database Setup
app.config['SQLALCHEMY_DATABASE_URI'] = config('POSTGRES_DB')
# app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('POSTGRES_DB')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

# Iniitalize
ma = Marshmallow(app)
api = Api(app)
db.init_app(app)

@app.before_first_request
def create_tables():
    db.create_all()

# Resources
api.add_resource(BoxerRanking, '/rankings/<string:website>')
api.add_resource(UserList, '/userlist')
api.add_resource(UsersList, '/userlist/<string:name>')
api.add_resource(CommunityList, '/community')

if __name__ == '__main__':
    app.run(debug=True)