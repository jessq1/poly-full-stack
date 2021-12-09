import { Profile } from "../models/profile"
import { Request, Response } from "express";
import { IGetUserAuthInfoRequest } from "../types/express"
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const siteUrl = process.env.SITE_URL

export {
  userProfile,
  index,
  stripeAuthLink,
  checkStripeOnboarding,
  friend,
  unfriend,
}

function index(expressRequest: Request, res: Response) {
  const req = expressRequest as IGetUserAuthInfoRequest
  Profile.find({stripeOnboard: true, _id: { $ne: req.user.profile }})
  .populate('friends')
  .populate('payment')
  .then(profiles => {
    res.json(profiles)
  })
}

function userProfile(expressRequest: Request, res: Response) {
  const req = expressRequest as IGetUserAuthInfoRequest
  Profile.findById(req.user?.profile)
  .populate('friends')
  .populate('payment')
  .then(profile => {
    return checkStripeOnboarding(profile)
  }).then(profile => {
    res.json(profile)
  })
}

async function stripeAuthLink(expressRequest: Request, res: Response) {
  const req = expressRequest as IGetUserAuthInfoRequest
  const profile = await Profile.findById(req.user.profile)

  const accountLink = await stripe.accountLinks.create({
      account: profile.stripeCustomerId,
      refresh_url: siteUrl + '/login',
      return_url: siteUrl + '/',
      type: 'account_onboarding',
    })
  res.json(accountLink)
}

async function checkStripeOnboarding(profile: any) {
  const accountId = profile.stripeCustomerId

  const account = await stripe.accounts.retrieve(
    accountId
  )
  if(account.charges_enabled){
      profile.stripeOnboard =  true
      profile.save()
    }
  return profile
}

function friend(expressRequest: Request, res: Response) {
  const req = expressRequest as IGetUserAuthInfoRequest
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.friends.push(req.params.id)
    return profile.save()
  })
    .then(profile => {
      return profile.populate('friends').populate('payment')
    })
    .then((profile)=> {
      res.json(profile)
    })
}

function unfriend(expressRequest: Request, res: Response) {
  const req = expressRequest as IGetUserAuthInfoRequest
  Profile.findById(req.user.profile)
  .populate('friends')
  .populate('payment')
  .then(profile => {
    profile.friends.remove({ _id: req.params.id })
    profile.save()
    .then(()=> {
      res.json(profile)
    })
  })
}