# The Peoples Champ

## About
Boxing "pound for pound" lists are a subjective ranking list put together by pundits to display who they view to be current best boxers across all weight classes.

Using python, I scraped some of the most respected lists online and put them into one place for easy comparison. The website also allows users to submit/view their own list. A community list is then compiled based on the submissions of users.

This repository will serve as the codebase for the front-end React portion of the application. It will also house information about the project and the tech stack being used.


## Tech Stack
**Front-end**
- Javascript
- React
- Bulma

**Backend**
- Python
- Flask-Restful
- SQLAlchemy

**Database**
- PostgreSQL

**Tools** 
- Postman
- Git

## TODO for Version 1 Release
- [x] individual boxers listed must be unique
- [x] display user list
- [x] calculate community list
- [x] display community list
- [x] get modal to clear items and close out on submission for new list or load
- [x] on submission of new list, preload the user list on to the website
- [x] mobile compatability
- [ ] Create a cron job that will schedule the web scrape stuff once a week
- [ ] error handling for bad requests on the backend
- [x] deploy via heroku

## Planned for future release
- cache results so user does not have to keep loading their list
- Revamped design ( & for mobile )
- Optimize network requests
- 24 hour timer before list can be updated
- Spam prevention (timer/captcha)
- Spinning boxer heads for loading icons
- Logo
- Champion belt icons
