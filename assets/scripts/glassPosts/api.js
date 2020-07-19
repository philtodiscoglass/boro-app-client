'use strict'

const config = require('./../config')
const store = require('./../store')

const getGlassPosts = () => {
  return $.ajax({
    url: config.apiUrl + '/glass-posts',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createGlassPost = (data) => {
  console.log(data)
  const glassPost = data.glassPost
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/glass-posts',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      glassPost
    }
  })
}

const deleteGlassPost = (glassPostId) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/glass-posts/' + glassPostId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateGlassPost = (glassPostId, data) => {
  const glassPost = data.glassPost
  console.log('made it to API')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/glass-posts/' + glassPostId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      glassPost
    }
  })
}

module.exports = {
  getGlassPosts,
  createGlassPost,
  deleteGlassPost,
  updateGlassPost
}
