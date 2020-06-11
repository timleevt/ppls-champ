from flask_restful import Resource
from flask import jsonify
from models.userlist import UserListModel
from db import db

class CommunityList(Resource):
    def get(self):
        rankings = {}

        rank_properties = retrieve_rank_props(UserListModel)
        
        # Using a weighted ranking system of 10 -> 1 points 
        points = 10

        for rank in rank_properties:
            for i in db.session.query(getattr(UserListModel,rank)):
                if i[0] in rankings:
                    rankings[i[0]] += points
                else:
                    rankings[i[0]] = points
            points -= 1
            
        return sorted(rankings, key=rankings.get, reverse=True)[:10]


def retrieve_rank_props(cls):   
  return [i for i in cls.__dict__.keys() if 'rank' in i]


