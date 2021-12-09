# Poly

## Project Intro
Poly is a Peer to peer payment application that allows users to transfer money between friends. Utilizing React, Typescript, Express, and Node.js, poly provide a easy solutions to transfer funds between friends. 

## Project Repo
You can access full code for this application via these folders:
- front-end: https://github.com/jessq1/poly
- back-end: https://github.com/jessq1/poly-server

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
<img width="1114" alt="1-verify with stripe" src="https://user-images.githubusercontent.com/85958041/144761583-2966f08d-d0f7-4978-af2e-31258f540f7f.png">

2. You can add/remove friends in the users page
   <img width="1144" alt="2-add-remove friend" src="https://user-images.githubusercontent.com/85958041/144761589-193354af-77db-461e-9f26-b8b3a9b7854f.png">

3. You can pay/request payment from a friend 
   <img width="1141" alt="Screen Shot 2021-12-05 at 2 56 18 PM" src="https://user-images.githubusercontent.com/85958041/144761718-663461dd-ed9e-4cc6-abc5-23b420d82eed.png">
<img width="1147" alt="Screen Shot 2021-12-05 at 2 58 07 PM" src="https://user-images.githubusercontent.com/85958041/144761747-f38c49c0-43fb-4d63-a7b0-9b0e6eaeb639.png">

1. You can see previous payments in the payment index page
   <img width="1130" alt="3-previous-payment-list" src="https://user-images.githubusercontent.com/85958041/144761597-c2bdc39f-d61c-4dc0-9d86-c0634011d1f4.png">

2. In the notification pannel, you will see pending transactions related to your account. 
<img width="1130" alt="Screen Shot 2021-12-05 at 2 58 25 PM" src="https://user-images.githubusercontent.com/85958041/144761754-1f6220af-e319-44a1-a039-7d127f6e6d9f.png">

## Live Version
The website is accessible at  https://poly-p2p.herokuapp.com/
Currently, the website is under test mode. To test the transactions you can use Stripe's default credit card:

See more details here: https://stripe.com/docs/testing
To test Stripe Connect, use information here: https://stripe.com/docs/connect/testing

