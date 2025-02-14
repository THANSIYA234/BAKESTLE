import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDB5ZPJH90wHpu_PUou58QMKs4KFGU15bM",
    authDomain: "bakestle.firebaseapp.com",
    projectId: "bakestle",
    storageBucket: "bakestle.firebasestorage.app",
    messagingSenderId: "119791830994",
    appId: "1:119791830994:web:09c0dcb569e09304feea0b",
    measurementId: "G-39S3FCGCPH"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const FirebaseContext = createContext({ auth });

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};
