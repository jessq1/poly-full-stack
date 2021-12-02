import * as tokenService from './tokenService'
const BASE_URL = '/api/users'

function getAllUsers() {
  return fetch(BASE_URL, {
    headers: {Authorization: `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

export {
  getAllUsers
}