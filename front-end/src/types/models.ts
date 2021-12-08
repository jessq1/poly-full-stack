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
  friends: IProfile[],
    payment: IPayment[],
    events:any[],
}

export interface IPayment{
  _id: string,
  amount: number,
  initiator: IProfile,
  person:IProfile,
  paymentFrom: IProfile,
  paymentTo: IProfile,
  methodIsPay: boolean,
  note: string,
  completed: boolean,
  likes: number,
  stripePaymentIntentId: string,
  created: Date,
}