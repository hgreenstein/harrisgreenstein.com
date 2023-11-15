import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar';
import About from './components/About/About';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import AlertDismissible from './components/Home/AlertDismissible';
import ArchiveWebsite from './components/Archive/ArchiveWebsite';
import AboutDev from './components/About/AboutDev';
import Experience from './components/Experience/Experience';
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
                            <AboutDev key={darkMode} darkMode={darkMode}/>
                            <Experience />
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
