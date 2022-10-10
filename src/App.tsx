import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './components/editPost/EditPost';
import Navbar from './components/navbar/Navbar';
import { auth } from './firebase-config';
import { signInAnonymously, signOut } from 'firebase/auth';
import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signIn = (): void => {
    signInAnonymously(auth)
      .then(() => {
        localStorage.setItem('isAuth', 'true');
        setIsAuth(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const logOut = (): void => {
    signOut(auth);
    localStorage.setItem('isAuth', 'false');
    setIsAuth(false);
  };

  return (
    <BrowserRouter>
      <Navbar isAuth={isAuth} signIn={signIn} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/create" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/edit" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
