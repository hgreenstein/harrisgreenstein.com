import React, { useEffect, useCallback, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import HarrisLight from './assets/redOutline.png';
import HarrisDark from './assets/darkModeHarris.png';
import './home.css';
import VaraText from './VaraText';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import AlertDismissible from './AlertDismissible';
import HarrisConducting from '../About/assets/pepBand.jpg';
import HandleNavigation from '../../handleNavigation.js';
import TGCSStar from './assets/tgcsStar.png';
function Home({ darkMode }) {
    let varaCounter = 0;
    const heroImage = useRef(null);
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);
    useEffect(() => {
        const currentHeroImage = heroImage.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('home-hero-image-animate'); // Updated class name
                    }
                });
            },
            {
                rootMargin: '0px', // Adjust as needed
                threshold: 0.05, // Adjust the threshold as per your requirement
            }
        );
        if (currentHeroImage) {
            observer.observe(currentHeroImage);
        }
        return () => {
            if (currentHeroImage) {
                observer.unobserve(currentHeroImage);
            }
        };
    }, [heroImage]);
    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    particles: {
                        number: {
                            value: 160,
                            density: {
                                enable: true,
                            },
                        },
                        color: {
                            value: darkMode ? '#fff' : '#000',
                        },
                        shape: {
                            type: 'square',
                        },
                        opacity: {
                            value: {
                                min: 0.1,
                                max: 1,
                            },
                            animation: {
                                enable: true,
                                speed: 1,
                                sync: false,
                            },
                        },
                        size: {
                            value: {
                                min: 1,
                                max: 3,
                            },
                        },
                        move: {
                            enable: true,
                            speed: {
                                min: 0.1,
                                max: 1,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'bubble',
                            },
                            onClick: {
                                enable: true,
                                mode: 'repulse',
                            },
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                links: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 250,
                                size: 0,
                                duration: 2,
                                opacity: 0,
                            },
                            repulse: {
                                distance: 400,
                                duration: 0.4,
                            },
                            push: {
                                quantity: 4,
                            },
                            remove: {
                                quantity: 2,
                            },
                        },
                    },
                    background: {
                        color: darkMode ? '#222' : '#fff',
                        position: '50% 50%',
                        repeat: 'no-repeat',
                        size: '20%',
                    },
                    detectRetina: true,
                }}
            />

            <div
                className={
                    darkMode ? 'home-container-dark' : 'home-container-light'
                }
            >
                <section className="home-section-bg-gradient">
                    <div className="home-content-wrapper">
                        <div className="home-grid-layout">
                            <div className="home-hero-txt">
                                <h1 className="home-title">
                                    Hey, I'm
                                    <div className="vara">
                                        <VaraText
                                            id={`vara-container-${varaCounter++}`}
                                            darkMode={darkMode}
                                        />
                                    </div>
                                </h1>
                                <p className="home-intro-text">
                                    Creating software driven solutions to
                                    business problems
                                </p>
                                <div className="home-button-wrapper">
                                    <div className="home-button-background"></div>
                                    <a
                                        href="#about"
                                        onClick={HandleNavigation}
                                        title=""
                                        className="home-read-button"
                                        role="button"
                                    >
                                        Learn more about me!
                                    </a>
                                </div>
                            </div>

                            <div className="home-latest-picks lg:order-last lg:pb-20 lg:col-span-3">
                                <p className="home-latest-picks-title">
                                    🔗 Quick Links
                                </p>
                                <div className="home-latest-picks-container">
                                    <div className="home-latest-picks-list">
                                        <div className="home-latest-pick-item">
                                            <img
                                                className="home-latest-pick-image"
                                                src={TGCSStar}
                                                alt=""
                                            />
                                            <p className="home-latest-pick-description">
                                                <a
                                                    href="#"
                                                    title=""
                                                    onClick={HandleNavigation}
                                                >
                                                    Find out about my exciting
                                                    internship experience & view
                                                    my full resume
                                                    <span
                                                        className="home-latest-pick-span"
                                                        href="#background-container"
                                                    ></span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="home-latest-picks-list">
                                        <div className="home-latest-pick-item">
                                            <img
                                                className="home-latest-pick-image"
                                                src={HarrisConducting}
                                                alt=""
                                            />
                                            <p className="home-latest-pick-description">
                                                <a
                                                    href="#about"
                                                    onClick={HandleNavigation}
                                                    title=""
                                                >
                                                    Learn about my time as
                                                    conductor of the Big Red Pep
                                                    Band!
                                                    <span
                                                        className="home-latest-pick-span"
                                                        href="#leadership"
                                                    ></span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="home-hero-image">
                                <img
                                    src={darkMode ? HarrisDark : HarrisLight}
                                    alt="Image of Harris Greenstein"
                                    ref={heroImage}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Home;
