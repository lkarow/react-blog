import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCICKGx_3Pr2sPoBEn1XbJN3tfttZa58Qs',
  authDomain: 'blog-project-36daa.firebaseapp.com',
  projectId: 'blog-project-36daa',
  storageBucket: 'blog-project-36daa.appspot.com',
  messagingSenderId: '624998085020',
  appId: '1:624998085020:web:4d31106af35986951c9859',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();
