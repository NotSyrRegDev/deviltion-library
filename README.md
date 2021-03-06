[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com) 

[![madewithreact](https://img.shields.io/badge/madewith-react-green.svg)](https://reactjs.org/) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# React Deviltion Library

is a web application to explore new books written by best authors from the new york times api
aside from exploring you can filter your favourite new books by category
and see the top books & best sellers 



![N|Solid](https://i.ibb.co/gJBZS98/2022-07-16-180058.png)


### Viewing Top Books

![N|Solid](https://i.ibb.co/C2LYpBs/2022-07-16-180222.png)


## Prerequisites

You need to have [Node.js](https://nodejs.org/) installed on your computer to run this app locally.

## Getting Started

### Clone This Repository

```
git clone https://github.com/NotSyrRegDev/deviltion-library
```

### Install Required Packages

```
npm install 
```

### Get Your Api Key

You need to have an account at New York Times Developers [Login Here](https://developer.nytimes.com/accounts/login)
One you have that you will have your own api secret key then follow next step

### Create .env File At Root Directory & Add The Following

```sh

~/ REACT_APP_SECRET_KEY = 'your_secrey_api_key'

```

### Open [Firebase Console](https://console.firebase.google.com/) and create new project with the following

- Enable Authentication Via Google

### Add The Necessary Enviroment Variables To Use Firebase

```
REACT_APP_FIREBASE_API_KEY = 'your_firebase_api_key'
REACT_APP_FIREBASE_AUTH_DOMAIN = 'your_firebase_auth_domain'
REACT_APP_FIREBASE_PROJECT_ID = 'your_firebase_proejct_id'
REACT_APP_FIREBASE_STOARGE_BUCKET = 'your_firebase_stoarge_bucket'
REACT_APP_FIREBASE_MESSAGE_SENDER_ID = 'your_firebase_message_sender_id'
REACT_APP_FIREBASE_APP_ID = 'your_firebase_app_id'
REACT_APP_FIREBASE_MEASURE_ID = 'your_firebase_measure_id'
```


### Run The Application

```sh
# run the application
~/ npm start

```

## How It Works 
- Access the New york times API by [sending queries](https://api.nytimes.com/svc/books/v3/lists/).
- [Firebase Version 9 For Google Authentication]([https://v5.reactrouter.com/web/guides/quick-start](https://firebase.google.com/))
- [Axios for sending api requests](https://www.npmjs.com/package/axios)




> Check This Live [Demo](https://deviltion-library.web.app/) 
