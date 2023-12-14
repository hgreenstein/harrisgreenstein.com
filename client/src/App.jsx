import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar';
import About from './components/About/About';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import ReactGA from 'react-ga';
import ArchiveWebsite from './components/Archive/ArchiveWebsite';
import AboutDev from './components/About/AboutDev';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/footer';
import Blog from './components/Blog/Blog.jsx';
function App() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const theme = darkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [darkMode]);
    return (
        <Router>
            <NavigationBar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                id="navbar"
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="app-container">
                            <Home
                                darkMode={darkMode}
                                setDarkMode={setDarkMode}
                            />{' '}
                            <AboutDev key={darkMode} darkMode={darkMode} />
                            <Experience />
                            <Projects />
                            <Contact />
                            <Footer />
                        </div>
                    }
                />
                <Route path="/archive" element={<ArchiveWebsite />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>
    );
}

export default App;
