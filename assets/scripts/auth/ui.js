'use strict'

const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#auth-message').text(`You have signed up succesfully, ${response.user.email}`)
  $('form').trigger('reset')
}

const onSignUpFailure = () => {
  $('#auth-message').text('Sign up failed')
  $('form').trigger('reset')
}

const onSignInSuccess = (response) => {
  store.user = response.user
  console.log(store.user)
  $('#auth-message').text(`You have signed in, ${response.user.email}`)
  $('form').trigger('reset')
}

const onSignInFailure = () => {
  $('#auth-message').text('Incorrect email or password')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = (response) => {
  $('#auth-message').text(`You have changed your password, ${response.user.email}`)
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('#auth-message').text('Change password failed')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
