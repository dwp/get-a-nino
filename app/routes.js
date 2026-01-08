//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/queue-type-answer', function (req, res) {

  var queueType = req.session.data['what-queue']

  // Check whether the variable matches a condition
  if (queueType== "home-office"){
    // Send user to next page
    res.redirect('/case-details')
  }

   if (queueType== "benefits"){
    // Send user to next page
    res.redirect('/404')
  } 

   if (queueType== "student-loan"){
    // Send user to next page
    res.redirect('/404')
  } 

   if (queueType== "emergency"){
    // Send user to next page
    res.redirect('/404')
  } 

   if (queueType== "validation"){
    // Send user to next page
    res.redirect('/404')
  } 

  if (queueType== "work"){
    // Send user to next page
    res.redirect('/404')
  } 
  
})

router.post('/case-decision-answer', function (req, res) {

  var queueType = req.session.data['what-decision']

  // Check whether the variable matches a condition
  if (queueType== "allocated"){
    // Send user to next page
    res.redirect('/confirm-allocation')
   } 

   if (queueType== "traced"){
    // Send user to next page
    res.redirect('/confirm-trace')
   } 
    
   if (queueType== "rejected"){
    // Send user to next page
    res.redirect('/confirm-refused')
   }
})