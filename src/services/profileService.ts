import * as tokenService from "./tokenService"
import 'dotenv/config.js'
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);
const siteUrl = process.env.REACT_APP_SITE_URL

const BASE_URL = "/api/profiles/"

export function getUserProfile() {
  return fetch(`${BASE_URL}userProfile`, 
  {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
    mode: 'cors'})
  .then(res => res.json()
  )
}

export async function directToStripeAuth(userProfile: any) {
  const stripeCustomerId = userProfile?.stripeCustomerId
  console.log(stripeCustomerId)
  console.log(siteUrl)

  const accountLink = await stripe.accountLinks.create({
    account: stripeCustomerId,
    refresh_url: siteUrl + '/login',
    return_url: siteUrl + '/',
    type: 'account_onboarding',
  })

  console.log(stripeCustomerId)
  console.log(siteUrl)


  console.log(accountLink)
  return accountLink.url
}
