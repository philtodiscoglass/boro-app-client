'use strict'

// const store = require('./../store')
const glassPostsTemplate = require('../templates/glassPostsTemplate.handlebars')

const onGetGlassPostsSuccess = (data) => {
  const showGlassPostsHtml = glassPostsTemplate({ glassPosts: data.glassPosts })
  $('.content').html(showGlassPostsHtml)
}

const onGetGlassPostsFailure = () => {
  $('#message').text('Show Posts Failed!')
  $('form').trigger('reset')
}

const onCreateGlassPostFailure = () => {
  $('#message').text('Create Post Failed!')
  $('form').trigger('reset')
}

const onCreateGlassPostSuccess = () => {
  $('#message').text('Post Created!')
  $('form').trigger('reset')
}

const onDeleteGlassPostSuccess = (glassPostId) => {
  $(`[data-id-container='${glassPostId}']`).remove()
  $('#message').text('Delete Post Success!')
}

const onDeleteGlassPostFailure = () => {
  $('#message').text('Delete Post Failed!')
}

const onUpdateGlassPostSuccess = () => {
  $('#message').text('Post Updated!')
}

const onUpdateGlassPostFailure = () => {
  $('#message').text('Update Failed!')
}

module.exports = {
  onGetGlassPostsSuccess,
  onGetGlassPostsFailure,
  onCreateGlassPostSuccess,
  onCreateGlassPostFailure,
  onDeleteGlassPostSuccess,
  onDeleteGlassPostFailure,
  onUpdateGlassPostSuccess,
  onUpdateGlassPostFailure
}
