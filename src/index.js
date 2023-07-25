import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDH_kFcoICJfF8JoVPaeLwQDuFvWtLUXMs",
  authDomain: "where-s-waldo-7529b.firebaseapp.com",
  projectId: "where-s-waldo-7529b",
  storageBucket: "where-s-waldo-7529b.appspot.com",
  messagingSenderId: "740281259274",
  appId: "1:740281259274:web:b9f37c5c8df63913e596f3",
  measurementId: "G-K633V7ZYZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HashRouter basename="/">
        <App />
      </HashRouter>
  </BrowserRouter>
  </React.StrictMode>
);

