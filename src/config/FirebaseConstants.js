import firebase from 'firebase';

let RNRSConfig = {
  apiKey: "AIzaSyDiUscQiOZWMPBaFXfOylHP4JuqK68YfP0",
  authDomain: "react-native-retail-site-883bc.firebaseapp.com",
  databaseURL: "https://react-native-retail-site-883bc.firebaseio.com",
  storageBucket: "react-native-retail-site-883bc.appspot.com"
};

let RNRS = firebase.initializeApp(RNRSConfig);

export const RNRSData = RNRS.database();
export const RNRSAuth = RNRS.auth;
