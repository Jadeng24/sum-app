import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar/Nav';

import './App.scss';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import Boats from './pages/Boats/Boats';
import BoatBuilder from './pages/Boat-Builder/Boat-Builder';
import Engines from './pages/Engines/Engines';
import Admin from './pages/Admin/Admin';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/boats" element={<Boats />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/engines" element={<Engines />} />
                    <Route path="/boat-builder" element={<BoatBuilder />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
