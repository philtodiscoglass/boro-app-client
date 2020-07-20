'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const showSignIn = () => {
  event.preventDefault()
  $('#sign-in-page').show()
  $('#sign-up-page').hide()
}

const showSignUp = () => {
  event.preventDefault()
  $('#sign-in-page').hide()
  $('#sign-up-page').show()
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const showChangePassword = () => {
  event.preventDefault()
  $('#change-password-page').show()
  $('#sign-up-page').hide()
  $('#sign-in-page').hide()
  $('#create-glass-post-page').hide()
  $('.content').hide()
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  showSignIn,
  showSignUp,
  showChangePassword
}
