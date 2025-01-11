// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHUQ-0KAlweV5rOzDzi-6fnYuiuHOhXDs",
  authDomain: "e-wallet-26752.firebaseapp.com",
  databaseURL: "https://e-wallet-26752-default-rtdb.firebaseio.com",
  projectId: "e-wallet-26752",
  storageBucket: "e-wallet-26752.appspot.com",
  messagingSenderId: "1001408888365",
  appId: "1:1001408888365:web:f2c6c1db135447e4e382a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
