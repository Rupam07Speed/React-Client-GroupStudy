
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDKwlHvq-cC4eWjgFscok8Mx3qCoTW5yP0",
    authDomain: "study-sphere-client.firebaseapp.com",
    projectId: "study-sphere-client",
    storageBucket: "study-sphere-client.appspot.com",
    messagingSenderId: "62469881262",
    appId: "1:62469881262:web:0d488d52cf36d9dc45dc3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;