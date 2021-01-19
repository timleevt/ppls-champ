# The Peoples Champ

## About
Boxing "pound for pound" lists are a subjective ranking list put together by pundits to display who they view to be current best boxers across all weight classes.

Using python, I scraped some of the most respected lists online and put them into one place for easy comparison. The website also allows users to submit/view their own list. A community list is then compiled based on the submissions of users.

This repository will serve as the codebase for the front-end React portion of the application. It will also house information about the project and the tech stack being used.

## Installation
The below information may be ignored depending on if the docker file was properly created
Installation of dependencies outside of the ones needed for the scraping mechanism (requests/beautiful soup) are no longer needed with Docker
The set up for the backend should be complete with `docker-compose up --build`
Front end installation: `npm install` or `yarn install`

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
- Docker

## TODO for Version 2 Release
- [ ] Create a cron job that will schedule the web scrape once a week
- [ ] error handling for bad requests on the backend
- [x] minimum Docker integration
- [ ] Fix formatting for mobile
- [ ] redo misc lists
- [ ] add reddit p4p list
- [ ] add testing to make sure lists do not error

## Planned for future release
- full docker integration
- cache results so user does not have to keep loading their list
- pin system
- fix dependency bot alerts
- 24 hour timer before list can be updated
- conversion to React Hooks
- Spam prevention (timer/captcha)
- Spinning boxer heads for loading icons
- Logo
- Champion belt icons
