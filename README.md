# The Peoples Champ

## About
Boxing "pound for pound" lists are a subjective ranking list put together by pundits to display who they view to be current best boxers across all weight classes.

Using python, I scraped some of the most respected lists online and put them into one place for easy comparison. The website also allows users to submit/view their own list. A community list is then compiled based on the submissions of users.

This repository will serve as the codebase for the front-end React portion of the application. It will also house information about the project and the tech stack being used.

## Pre-requisites & installation
Node is needed for installing the dependencies  
Use `npm install` to install all dependencies from the package.json  
Use `npm start` to run the code in localhost

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
- [ ] individual boxers listed must be unique
- [x] display user list
- [ ] mobile compatability
- [ ] Create a cron job that will schedule the web scrape stuff once a week
- [ ] error handling for bad requests on the backend
- [ ] remove sensitive info from backend (database id/pw, etc) and make it use environment variabes
- [ ] deploy via heroku
- [ ] styling fixes

## Bugs
- loading a different list does not clear out the first one

## Planned for future release
- optimize network requests
- fix so default name on form is not Canelo
- 24 hour timer before list can be updated
- Spam prevention (timer/captcha)
- Spinning boxer heads for loading icons
- Logo
- Champion belt icons
