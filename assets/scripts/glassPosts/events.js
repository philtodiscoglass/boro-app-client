'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('./../store')

const onGetGlassPosts = (event) => {
  event.preventDefault()
  api.getGlassPosts()
    .then(ui.onGetGlassPostsSuccess)
    .catch(ui.onGetGlassPostsFailure)
}

const clearGlassPosts = (event) => {
  event.preventDefault()
  $('.content').hide()
}

const onCreateGlassPost = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createGlassPost(data)
    .then(ui.onCreateGlassPostSuccess)
    // .then(() => onGetGlassPosts())
    .catch(ui.onCreateGlassPostFailure)
}

const showCreateGlassPost = (event) => {
  event.preventDefault()
  $('#create-glass-post-page').show()
  $('.content').hide()
  $('#change-password-page').hide()
}

const onDeleteGlassPost = (event) => {
  event.preventDefault()
  const glassPostId = $(event.target).data('id')
  api.deleteGlassPost(glassPostId)
    .then(() => ui.onDeleteGlassPostSuccess(glassPostId))
    .catch(ui.onDeleteGlassPostFailure)
}

const onUpdateGlassPost = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const glassPostId = $(event.target).data('id')
  console.log('made it to events')
  api.updateGlassPost(glassPostId, data)
    .then(ui.onUpdateGlassPostSuccess)
    .then(() => onGetGlassPosts())
    .catch(ui.onUpdateGlassPostFailure)
}

module.exports = {
  onGetGlassPosts,
  onCreateGlassPost,
  onDeleteGlassPost,
  onUpdateGlassPost,
  clearGlassPosts,
  showCreateGlassPost
}
