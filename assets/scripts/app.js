'use strict'

const authEvents = require('./auth/events')
const glassPostEvents = require('./glassPosts/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#sign-in-page').hide()
  $('#already-member').on('click', authEvents.showSignIn)
  $('#non-member').on('click', authEvents.showSignUp)
  $('#change-password-btn').on('click', authEvents.showChangePassword)
  $('#change-password-page').hide()
  $('.nav-button').hide()
})

$(() => {
  $('#get-glass-posts').on('click', glassPostEvents.onGetGlassPosts)
  $('#clear-glass-posts').on('click', glassPostEvents.clearGlassPosts)
  $('#create-glass-post').on('submit', glassPostEvents.onCreateGlassPost)
  $('.content').on('click', '.delete-glass-post', glassPostEvents.onDeleteGlassPost)
  $('.content').on('submit', '.update-glass-post', glassPostEvents.onUpdateGlassPost)
  $('#create-glass-post-page').hide()
  $('#create-new-post-btn').on('click', glassPostEvents.showCreateGlassPost)
})
