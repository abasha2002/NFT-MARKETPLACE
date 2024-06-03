import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Marketplace from './pages/Marketplace';
import Rankings from './pages/Rankings';
import Wallet from './pages/Wallet';
import ArtistPage from './pages/ArtistPage';

import "@fontsource/work-sans"; 
import "@fontsource/space-mono";

function App(){
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/artist" element={<ArtistPage />} />
        </Routes>
      </Router>
    );
}

export default App;