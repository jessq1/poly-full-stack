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