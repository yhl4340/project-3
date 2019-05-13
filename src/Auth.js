// // src/Auth/Auth.js
 /*eslint no-restricted-globals:0 */

import {AUTH_CONFIG} from './Auth_Config'
import auth0 from 'auth0-js';
var dotenv = require('dotenv');
dotenv.config();
const LOGIN_SUCCESS = '/secret';
const LOGIN_FAILURE = '/';


export default class Auth {
  auth0 = new auth0.WebAuth({
    // domain: process.env.AUTH0_DOMAIN,
    // clientID: process.env.AUTH0_CLIENT_ID,
    
    domain:'dev-67ou39ym.auth0.com',
    clientID: '8nVmn5vMJjRjvqjYh4X57ZU73xeotL5i',
    audience: 'https://dev-67ou39ym.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token', 
    scope: 'openid profile'
  });

  login() {
    this.auth0.authorize();
    console.log('here?')
  };
  constructor(){
      this.login = this.login.bind(this);
    
  }
//  will redirect to login
  

  handleAuthentication() {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify((authResults.expiresIn)* 1000 + new Date().getTime());
          //  this.setSession(authResults);
        window.localStorage.setItem('access_token', authResults.accessToken);
        window.localStorage.setItem('id_token', authResults.idToken);
        window.localStorage.setItem('expires_at', expiresAt);
        // localStorage.clear();
        location.hash = '';
        window.location.pathname = LOGIN_SUCCESS;
      }else if(err){
        window.location.pathname = LOGIN_FAILURE;
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(window.localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  // logout(){
  //   window.localStorage.removeItem('accesss_token');
  //   window.localStorage.removeItem('id_token');
  //   window.localStorage.removeItem('expires_at');
  //   location.pathname = LOGIN_FAILURE;
  // }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResults) => {
       if (authResults && authResults.accessToken && authResults.idToken) {
         this.setSession(authResults);
       } else if (err) {
         this.logout();
         console.log(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }

}