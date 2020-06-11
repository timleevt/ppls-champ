from db import db

class UserListModel(db.Model):

    __tablename__ = 'user_list'
    
    # Fields
    id = db.Column(db.Integer, primary_key=True)
    userID = db.Column(db.String(100), unique=True)
    rank_1 = db.Column(db.String(100))
    rank_2 = db.Column(db.String(100))
    rank_3 = db.Column(db.String(100))
    rank_4 = db.Column(db.String(100))
    rank_5 = db.Column(db.String(100))
    rank_6 = db.Column(db.String(100))
    rank_7 = db.Column(db.String(100))
    rank_8 = db.Column(db.String(100))
    rank_9 = db.Column(db.String(100))
    rank_10 = db.Column(db.String(100))

    # We may be able to refactor this to take an array of rankings so we don't have to have so many parameters
    # Constructor
    def __init__(self, userID, rank_1, rank_2, rank_3, rank_4, rank_5, rank_6, rank_7, rank_8, rank_9, rank_10):
        self.userID = userID
        self.rank_1 = rank_1
        self.rank_2 = rank_2
        self.rank_3 = rank_3
        self.rank_4 = rank_4
        self.rank_5 = rank_5
        self.rank_6 = rank_6
        self.rank_7 = rank_7
        self.rank_8 = rank_8
        self.rank_9 = rank_9
        self.rank_10 = rank_10
    
    @classmethod
    def find_by_userId(cls, userId):
        return UserListModel.query.filter_by(userID=userId).first()