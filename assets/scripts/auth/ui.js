'use strict'

const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#message').text(`You have signed up succesfully, ${response.user.email}`)
  $('form').trigger('reset')
}

const onSignUpFailure = () => {
  $('#message').text('Sign up failed')
  $('form').trigger('reset')
}

const onSignInSuccess = (response) => {
  store.user = response.user
  $('#message').text(`You have signed in, ${response.user.email}`)
  $('form').trigger('reset')
}

const onSignInFailure = () => {
  $('#message').text('Incorrect email or password')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = (response) => {
  $('#message').text(`You have changed your password`)
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('#message').text('Change password failed')
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text('You have signed out')
  $('form').trigger('reset')
}

const onSignOutFailure = () => {
  $('#message').text('Sign out failed')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
