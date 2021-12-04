import * as tokenService from './tokenService'
const BASE_URL = '/api/profiles'

function getAllUsers() {
  return fetch(BASE_URL, {
    headers: {Authorization: `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

export {
  getAllUsers
}