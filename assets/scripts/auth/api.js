'use strict'

const config = require('./../config')
// const store = require('./../store')

const signUp = (formData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: {
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password,
        password_confirmation: formData.credentials.password,
        location: formData.credentials.location,
        ig: formData.credentials.ig,
        bio: formData.credentials.bio
      }
    }
  })
}

module.exports = {
  signUp
}
