import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import About from './components/About';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import AlertDismissible from './components/AlertDismissible';
import ArchiveWebsite from './components/ArchiveWebsite';
import AboutDev from './components/AboutDev';
function App() {
    const [darkMode, setDarkMode] = useState(false);
    
    return (
        <Router>
            <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="app-container">
                            <AlertDismissible />
                            <Home
                                darkMode={darkMode}
                                setDarkMode={setDarkMode}
                            />{' '}
                            <About key={darkMode} darkMode={darkMode}/>
                        </div>
                    }
                />
                <Route
                    path='/archive'
                    element={
                        <ArchiveWebsite />
                    } />
            </Routes>
        </Router>
    );
}

export default App;
