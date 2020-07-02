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

const onSignInSuccess = (response) => {
  $('#auth-message').text(`You have signed in, ${response.user.email}`)
  $('form').trigger('reset')
}

const onSignInFailure = () => {
  $('#auth-message').text('Incorrect email or password')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
