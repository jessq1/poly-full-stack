# Poly

## Project Intro
Poly is a Peer to peer payment application that allows users to transfer money between friends. Utilizing React, Typescript, Express, and Node.js, poly provide a easy solutions to transfer funds between friends. 

## Project Repo
You can access full code for this application in this github repo:
- https://github.com/jessq1/poly-full-stack.git
- to run this on your local machine, use the following commands:
1. `git clone https://github.com/jessq1/poly-full-stack.git`
2. `cd front-end` to enter frontend folder
3. `npm i` to install frontend packages
4. `npm start` to run front-end
5. `cd server` to enter backend folder
6. `npm i` to install backend packages
7. `npm run dev` to run server

## Architecture Pattern
The Application utilizes MVC(Model View Controller) architecture pattern. There are three main models: User, Profile, Payment. Corresponding routes and controllers are established 

## Technology Used
- TypeScript
- React
- Node.js
- Express
- Material UI
- Figma

## Project Wireframe & ERD
1. ERD
<img width="971" alt="ERD" src="https://user-images.githubusercontent.com/85958041/144761574-b5e29483-c8de-475b-877f-ee3e06f584d5.png">

2. Wireframe
![Poly-d](https://user-images.githubusercontent.com/85958041/144762113-e1915417-e57e-4be8-a376-d67e523fdee4.png)
![Poly-m](https://user-images.githubusercontent.com/85958041/144762117-431caba8-8f68-482f-9cef-26d1e0aa9e0d.png)



## Project Walkthrough
1. After signing up with your emial address, you will be prompted to a link to verify with Stripe. (In test mode, you can use credentials in here: https://stripe.com/docs/connect/testing)
<img width="1436" alt="1-signup" src="https://user-images.githubusercontent.com/85958041/145433393-8db9d45f-1d8b-460a-9113-73a4905be90d.png">
<img width="1434" alt="1-landing" src="https://user-images.githubusercontent.com/85958041/145433441-31e43ca7-a130-41f0-acea-a6c63348ca3a.png">
<img width="1437" alt="2-verify" src="https://user-images.githubusercontent.com/85958041/145433465-7207be17-520c-4f91-9553-ef2fdae43566.png">

2. After virification, you can use the transaction functionalities. In the notification pannel, you will see pending transactions related to your account. 
<img width="1437" alt="3-notifications" src="https://user-images.githubusercontent.com/85958041/145433853-46b70d6e-5665-4a17-8c9c-28c0c5f51459.png">

3. You can add/remove friends in the users page
<img width="1437" alt="4-users" src="https://user-images.githubusercontent.com/85958041/145435157-59838d7b-b37a-4cdb-9593-a9178bf99afe.png">

4. You can pay/request payment from a friend 
   <img width="1435" alt="5-pay" src="https://user-images.githubusercontent.com/85958041/145434254-41631d1f-99d4-4269-b89f-30effa3f4d80.png">
   Submiting a pay request to prompt you to charge your credit card. For testing propose you can use the default Stripe credit card (4242424242424242)
   <img width="1439" alt="5-card" src="https://user-images.githubusercontent.com/85958041/145434584-c937698c-58d7-45f7-8eec-1a7cf4729f64.png">
   otherwise notification will be sent to the user

5. You can see previous payments in the payment index page
   <img width="1436" alt="5-payments" src="https://user-images.githubusercontent.com/85958041/145434780-67b22df9-78dc-472f-8aed-0169becc23d2.png">

6. The application is designed to be interactive 
<img width="1438" alt="6-ui" src="https://user-images.githubusercontent.com/85958041/145434893-b79710ed-3d88-4597-8db7-ba3329246324.png">
<img width="1437" alt="6-ui2" src="https://user-images.githubusercontent.com/85958041/145434909-c3cdeed8-d1ef-4104-ab18-96ba7b352844.png">

## Live Version
The website is accessible at  https://poly-p2p.herokuapp.com/
Currently, the website is under test mode. To test the transactions you can use Stripe's default credit card:

See more details here: https://stripe.com/docs/testing
To test Stripe Connect, use information here: https://stripe.com/docs/connect/testing

