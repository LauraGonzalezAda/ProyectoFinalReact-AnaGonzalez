// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3GSOJOFbaaY2s5pENzfyAfYu890GaQc8",
    authDomain: "proyectofinalreact-anagonzalez.firebaseapp.com",
    projectId: "proyectofinalreact-anagonzalez",
    storageBucket: "proyectofinalreact-anagonzalez.appspot.com",
    messagingSenderId: "446646710527",
    appId: "1:446646710527:web:da9de8067f4be4d2641cca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);