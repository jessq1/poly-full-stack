import * as tokenService from "./tokenService"
const BASE_URL = "/api/profiles/"

export function getUserProfile() {
  return fetch(`${BASE_URL}userProfile`, 
  {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
    mode: 'cors'})
  .then(res => res.json())
}
