import firebase from 'firebase';

let RNRSConfig = {
  apiKey: "AIzaSyD6SKOtZgLk57gx4XyXpDGpKiXk4fTrdnU",
  authDomain: "react-native-retail-site.firebaseapp.com",
  databaseURL: "https://react-native-retail-site.firebaseio.com",
  storageBucket: "react-native-retail-site.appspot.com"
};

let RNRS = firebase.initializeApp(RNRSConfig);

export const RNRSData = RNRS.database();
export const RNRSAuth = RNRS.auth;
