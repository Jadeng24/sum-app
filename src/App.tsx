import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/Navbar/Nav';

import './App.scss';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import Boats from './pages/Boats/Boats';
import BoatBuilder from './pages/BoatBuilder/BoatBuilder';
import Engines from './pages/Engines/Engines';
import Admin from './pages/Admin/Admin';

const App = () => {
    const [isAdmin, updateIsAdmin] = useState(false);

    useEffect(() => {
        const currentUserEmail = localStorage.getItem('currentUserEmail');
        const adminUser = currentUserEmail === 'jaden.goodwin24@gmail.com';
        updateIsAdmin(adminUser);
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/boats" element={<Boats />} />
                    {/* <Route
                        path="/admin"
                        element={
                            isAdmin ? <Admin /> : <Navigate to="/" replace />
                        }
                    /> */}
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
