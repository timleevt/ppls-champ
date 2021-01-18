from flask_restful import Resource
from flask import jsonify
import os

class BoxerRanking(Resource):
    def get(self, website):
        filename = '../app/data/' + website + '.txt'
        print(filename)
        boxer_list = ['yaya']
        try:
            with open(filename, 'r') as f:
                contents = f.readline()
                boxer_list = contents.split(',')
        except IOError as err:
            print(err)
        except Exception as err:
            print(err)
        return jsonify(boxer_list)
