export interface IUser{
  firstName: string,
  lastName: string,
  _id: string,
  email: string,
}

export interface IProfile{
  firstName: string,
  lastName: string,
  _id: string,
  email: string,
  avatar: string,
  stripeCustomerId: string,
  stripeOnboard: boolean,
  friends: any[],
    payment: any[],
    events:any[],
}

export interface IPayment{
  _id: string,
  amount: number,
  initiator: any,
  paymentFrom: any,
  paymentTo: any,
  methodIsPay: boolean,
  note: string,
  completed: boolean,
  likes: number,
  stripePaymentIntentId: string,
  created: Date,
}