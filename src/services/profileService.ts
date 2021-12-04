import * as tokenService from "./tokenService"
import 'dotenv/config.js'
const axios = require('axios');

const BASE_URL = "/api/profiles/"
const siteUrl = process.env.REACT_APP_SITE_URL

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
  // console.log(stripeSecretKey)

  // const accountLink = await stripe.accountLinks.create({
  //   account: stripeCustomerId,
  //   refresh_url: siteUrl + '/login',
  //   return_url: siteUrl + '/',
  //   type: 'account_onboarding',
  // })

  // console.log(stripeCustomerId)
  // console.log(accountLink.url)

  const params = new URLSearchParams()
  params.append('account', stripeCustomerId)
  params.append('refresh_url', siteUrl + '/login')
  params.append('return_url', siteUrl)
  params.append('type', 'account_onboarding')
  
  axios.post(
    'https://api.stripe.com/v1/account_links', 
    params
  , {
    headers: {
      'Authorization' : `Bearer ${stripeSecretKey}`,
      'Content-Type' : 'application/x-www-form-urlencoded'
    }
  })
  .then(function (response:any) {
    console.log(response.data.url);
  })
  .catch(function (error:any) {
    console.log(error);
  });

  // return accountLink.url
}
