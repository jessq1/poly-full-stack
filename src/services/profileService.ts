import * as tokenService from "./tokenService"
import 'dotenv/config.js'
const axios = require('axios');

const BASE_URL = "/api/profiles/"
const siteUrl = process.env.REACT_APP_SITE_URL

export function getAllProfiles() {
  return fetch(BASE_URL, {
    headers: {Authorization: `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

export function getUserProfile() {
  return fetch(`${BASE_URL}userProfile`, 
  {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
    mode: 'cors'})
  .then(res => res.json()
  )
}

export async function directToStripeAuth(userProfile: any) {
  const stripeCustomerId: string = userProfile?.stripeCustomerId
  const stripeSecretKey = process.env.REACT_APP_STRIPE_SECRET_KEY

  const params = new URLSearchParams()
  params.append('account', stripeCustomerId)
  params.append('refresh_url', siteUrl + '/login')
  params.append('return_url', siteUrl)
  params.append('type', 'account_onboarding')
  
  const response = await axios.post(
    'https://api.stripe.com/v1/account_links', 
    params
  , {
    headers: {
      'Authorization' : `Bearer ${stripeSecretKey}`,
      'Content-Type' : 'application/x-www-form-urlencoded'
    }
  })
  
  return response.data?.url
}

export function friend(id: string) {
  return fetch(
    `${BASE_URL}/friend/${id}`,
    {
      method: 'PATCH',
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    },
    ).then((res) => res.json())
}

export function unfriend(id: string) {
  return fetch(
    `${BASE_URL}/unfriend/${id}`,
    {
      method: 'PATCH',
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    },
    ).then((res) => res.json())
}