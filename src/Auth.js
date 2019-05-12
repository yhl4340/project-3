// src/Auth/Auth.js

import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dev-67ou39ym.auth0.com',
    clientID: '8nVmn5vMJjRjvqjYh4X57ZU73xeotL5i',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });
//   constructor(){
//       this.login = this.login.bind(this);
//   }
//  will redirect to login
  login() {
    this.auth0.authorize();
  }
  
}