import React, { useState } from 'react';
import './about.css';
import { Parallax, Background } from 'react-parallax';
import Image from '../assets/solidCircuit.svg';
import Harris from '../assets/harrisGradClock.jpg';
import DarkImage from '../assets/circuitDark.svg';
import CornellLogo from '../assets/cornellLogo.png';
function About({ darkMode }) {
    const image = darkMode ? DarkImage : Image;

    return (
        <>
            <Parallax
                bgImage={image}
                blur={0}
                strength={500}
                className="parallax"
                bgClassName="dragon-scales"
            >
                <div className="about-container">
                    <h1 className="about-header"> About Me </h1>
                    <div className="about-content-grid">
                        <div className="about-content">
                            <div className="about-content-cornell">
                                <h5>
                                    Cornell University, B.Sc. Computer Science,
                                    Minor in Business for Engineers, 2019-2023{' '}
                                </h5>
                                <img
                                    src={CornellLogo}
                                    className="about-content-cornell-logo"
                                />
                            </div>

                            <div className="about-card-inner">
                                <h1>My Education</h1>
                                <div className="about-content-subtitle">
                                    <div className="about-content-regular">
                                        <ul className="about-content-list">
                                            <li>
                                                <strong>
                                                    Advanced Technical
                                                    Curriculum:
                                                </strong>{' '}
                                                Mastered complex concepts in
                                                Object-Oriented and Functional
                                                Programming, Networking,
                                                Embedded Systems, AI, and more,
                                                ensuring a deep technical
                                                understanding and practical
                                                application skills in computer
                                                science.
                                            </li>
                                            <li>
                                                <strong>
                                                    Practical Projects:
                                                </strong>{' '}
                                                Developed an AI agent that
                                                utilized neural networks, and
                                                NLP and analyzed the worldwide
                                                network coverage of Starlink
                                                Satellite Internet, learn more
                                                in projects.
                                            </li>
                                            <li>
                                                <strong>
                                                    Business Mindset:
                                                </strong>{' '}
                                                Studies in business were pivotal
                                                in linking C.S. principles with
                                                their practical applications,
                                                ensuring technical solutions are
                                                grounded in solid business
                                                strategies.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={Harris} className="about-img" />
                    </div>
                </div>
            </Parallax>
        </>
    );
}
export default About;
