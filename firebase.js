// ==========================================
// SKR INTERNATIONAL V4
// firebase.js
// ==========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


// Firebase Configuration

const firebaseConfig = {

apiKey: "AIzaSyARX24b0EnCmh-3WcYfy9wtgj5vpHUNEPQ",

authDomain: "sherry-project-1214.firebaseapp.com",

projectId: "sherry-project-1214",

storageBucket: "sherry-project-1214.firebasestorage.app",

messagingSenderId: "692003406873",

appId: "1:692003406873:web:e38c4b3806d963b5761688",

measurementId: "G-2RPT4PEXHX"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Authentication

const auth = getAuth(app);


// Database

const db = getFirestore(app);


// Export

export { app, auth, db };
