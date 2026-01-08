//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/queue-type', function (req, res) {

  var queueType = req.session.data['what-queue']

  // Check whether the variable matches a condition
  if (queueType== "home-office"){
    // Send user to next page
    res.redirect('/case-details')
  } else {
    // Send user to ineligible page
    res.redirect('/404')
  }

})