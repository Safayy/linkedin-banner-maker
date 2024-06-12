import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import NotFound from './components/NotFound';
import Design from './components/Design';

function App() {
  return (
    <>
        <Router>
        <Navbar/>
        <div className="content">
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>} />  
            <Route path="/create/:name/:phone/:email/:job/:website" element={<Design/>} />   
            <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>  
        </Router>
    </>
  )
}

export default App