from flask_restful import Resource
from flask import jsonify

class BoxerRanking(Resource):
    def get(self, website):
        filename = '../data/' + website + '.txt'
        boxer_list = []
        try:
            with open(filename, 'r') as f:
                contents = f.readline()
                boxer_list = contents.split(',')
        except IOError as err:
            print(err)
        except Exception as err:
            print(err)
        return jsonify(boxer_list)
