from flask_marshmallow import Schema

# Schema. Still not sure what this does.. need to research
class UserListSchema(Schema):
    class Meta:
        fields = ('id', 'userID', 'rank_1', 'rank_2', 'rank_3', 'rank_4', 'rank_5', 'rank_6', 'rank_7', 'rank_8', 'rank_9', 'rank_10')

# Init Schema
userlist_schema = UserListSchema()