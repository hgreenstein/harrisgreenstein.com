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
import ReactLogo from '../Projects/assets/reactLogo.svg';
import AiLogo from './assets/aiLogo.png';
import useAnimateOnObserve from '../../Custom-Hooks/useAnimateOnObserve.js';
function Home({ darkMode }) {
    let varaCounter = 0;
    const heroImage = useRef(null);
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);
    useAnimateOnObserve(heroImage, 'home-hero-image-animate', { rootMargin: '0px', threshold: 0.05 });
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
                                                    href="#background-container"
                                                    title="Gifted Child Society Star"
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
                                                src={AiLogo}
                                                alt="Natural Language Programming"
                                            />
                                            <p className="home-latest-pick-description">
                                                <a
                                                    href="/blog/how_will_coders_co_program_with_ai"
                                                    title=""
                                                >
                                                   Read the latest blog article about natural language programming!
                                                    <span
                                                        className="home-latest-pick-span"
                                                        href="#leadership"
                                                    ></span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                <div className="home-latest-picks-list">
                                        <div className="home-latest-pick-item">
                                            <img
                                                className="home-latest-pick-image home-react-logo"
                                                src={ReactLogo}
                                                alt=""
                                            />
                                            <p className="home-latest-pick-description">
                                                <a
                                                    href="#projects"
                                                    onClick={HandleNavigation}
                                                    title=""
                                                >
                                                    See this website's Github and learn about how I made it
                                                    <span
                                                        className="home-latest-pick-span"
                                                        href="#projects"
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
