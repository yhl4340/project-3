// // src/Auth/Auth.js
 /*eslint no-restricted-globals:0 */

import {AUTH_CONFIG} from './Auth_Config'
import auth0 from 'auth0-js';
const LOGIN_SUCCESS = '/secret';
const LOGIN_FAILURE = '/';
export default class Auth {

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });
  constructor(){
    
      this.login = this.login.bind(this);
    
  }
//  will redirect to login
  login() {
    this.auth0.authorize();
  };

  handleAuthentication() {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        // let expiresAt = JSON.stringify((authResults.expiresIn)* 1000 + new Date().getTime());
           this.setSession(authResults);
        // localStorage.setItem('access_token', authResults.accessToken);
        // localStorage.setItem('id_token', authResults.idToken);
        // localStorage.setItem('expires_at', expiresAt);
        // location.hash = '';
        location.pathname = LOGIN_SUCCESS;
      }else if(err){
        location.pathname = LOGIN_FAILURE;
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  // logout(){
  //   localStorage.removeItem('accesss_token');
  //   localStorage.removeItem('id_token');
  //   localStorage.removeItem('expires_at');
  //   location.pathname = LOGIN_FAILURE;
  // }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResults) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the Access Token will expire at
    let expiresAt = (authResults.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResults.accessToken;
    this.idToken = authResults.idToken;
    this.expiresAt = expiresAt;

    // navigate to the home route
    location.pathname = LOGIN_FAILURE;
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