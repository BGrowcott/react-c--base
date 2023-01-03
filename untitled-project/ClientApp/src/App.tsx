import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './custom.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'


export default function App() {

    return (
        <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
        </Router>
    );
};
