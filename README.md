# Submit external form with PhantomJS

This script, when coupled with Heroku Scheduler, submits a form at regular intervals on an external page. Used primarily to auto update data extension fields in salesforce that are being populated by a third-party API.

## How to Deploy
1. Clone the repository to your desired folder
2. Commit to git first and then create a heroku app with the build pack
`heroku create --stack cedar --buildpack http://github.com/stomita/heroku-buildpack-phantomjs.git`
3. Push to Heroku
`git push heroku master`
