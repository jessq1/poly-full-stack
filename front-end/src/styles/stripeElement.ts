import {loadStripe} from '@stripe/stripe-js';
import 'dotenv/config.js'

export const stripePKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY

export const stripePromise = loadStripe(stripePKey);
