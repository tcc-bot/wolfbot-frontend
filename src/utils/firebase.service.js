import firebaseConfig from 'firebase';
import firebaseCredentials from '../config/firebase-development'

const config = {
  apiKey: firebaseCredentials.apiKey,
  authDomain: firebaseCredentials.authDomain,
  databaseURL: firebaseCredentials.databaseUrl,
  storageBucket: firebaseCredentials.storageBucket
};

export const firebase = firebaseConfig.initializeApp(config);
