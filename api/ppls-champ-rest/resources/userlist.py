from flask_restful import Resource
from models.userlist import UserListModel
from flask import jsonify, request
from db import db
from schemas.userlist import userlist_schema

class UserList(Resource):
    def post(self):
        userID = request.json['userID']
        rank_1 = request.json['rank_1']
        rank_2 = request.json['rank_2']
        rank_3 = request.json['rank_3']
        rank_4 = request.json['rank_4']
        rank_5 = request.json['rank_5']
        rank_6 = request.json['rank_6']
        rank_7 = request.json['rank_7']
        rank_8 = request.json['rank_8']
        rank_9 = request.json['rank_9']
        rank_10 = request.json['rank_10']

        new_userlist = UserListModel(userID, rank_1, rank_2, rank_3, rank_4, rank_5, rank_6, rank_7, rank_8, rank_9, rank_10)
        db.session.add(new_userlist)
        db.session.commit()
        return userlist_schema.dump(new_userlist)

class UsersList(Resource):
    def get(self, name):
        res = UserListModel.find_by_userId(name)
        return userlist_schema.jsonify(res)