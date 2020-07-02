'use strict'

// const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#auth-message').text(`You have signed up succesfully, ${response.user.email}`)
  $('form').trigger('reset')
}

const onSignUpFailure = () => {
  $('#auth-message').text('Sign up failed')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
