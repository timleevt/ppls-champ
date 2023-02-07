# Abandoned Project 
Site I was scraping no longer allows for it and lost interest in maintaining it.
Also the overall front end design was bad and terribly not optimized for mobile

# The Peoples Champ

## About
Boxing "pound for pound" lists are a subjective ranking list put together by pundits to display who they view to be current best boxers across all weight classes.

Using python, I scraped some of the most respected lists online and put them into one place for easy comparison. The website also allows users to submit/view their own list. A community list is then compiled based on the submissions of users.

This repository will serve as the codebase for the front-end React portion of the application. It will also house information about the project and the tech stack being used.

## Installation
python dependencies: `pip install -r requirements.txt`.
for Mac OS: `pip install psycopg2-binary` will also need to be done separately.
npm: `npm install`
postgres for Mac OS: `brew install postgres`
or install via website

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

## TODO for V2 Release
- [ ] error handling for bad requests on the backend
- [ ] 24 hour timer before list can be updated
- [ ] Make mobile friendly
- [ ] Clean up * on names

## Bugs
- [ ] Last push messed up mobile formatting

## Planned for future release
- make names uniform across lists ex. Saul Alvarez -> Canelo Alvarez
- organize folder structure to not need build file created before push
- cache results so user does not have to keep loading their list
- Optimize network requests
- Spinning boxer heads for loading icons
- Champion belt icons/indicators
- Heroku Scheduler, if needed. Otherwise load changes weekly, manually
