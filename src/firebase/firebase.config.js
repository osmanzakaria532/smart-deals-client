// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBjiWWoXh3AMe6CkcXBpsTpNJ2We8TgkdE',
  authDomain: 'smart-deals-auth-5e0ec.firebaseapp.com',
  projectId: 'smart-deals-auth-5e0ec',
  storageBucket: 'smart-deals-auth-5e0ec.firebasestorage.app',
  messagingSenderId: '755037721235',
  appId: '1:755037721235:web:9c8fd482368a9d8f38f366',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
