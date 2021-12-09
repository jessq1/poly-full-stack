import moment from 'moment' 

export const stripePKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY

export const date = (d: any) => moment(d).format('DD MMM, YYYY');
export const dateDM = (d: any) => moment(d).format('MM-DD');