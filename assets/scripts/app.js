'use strict'

const authEvents = require('./auth/events')
const glassPostEvents = require('./glassPosts/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})

$(() => {
  $('#get-glass-posts').on('click', glassPostEvents.onGetGlassPosts)
  $('#create-glass-post').on('submit', glassPostEvents.onCreateGlassPost)
  $('.content').on('click', '.delete-glass-post', glassPostEvents.onDeleteGlassPost)
  $('.content').on('submit', '.update-glass-post', glassPostEvents.onUpdateGlassPost)
})
