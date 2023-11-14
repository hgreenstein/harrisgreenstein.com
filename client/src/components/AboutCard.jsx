import React, { useState, useCallback, useEffect } from 'react';
import './about.css';
import Harris from '../assets/harrisGradClock.jpg';
import CornellLogo from '../assets/cornellLogo.png';
import Conducting from '../assets/pepBand.jpg';
function AboutCard({ darkMode, data }) {
    const logoName = data.superheading.logo;
    const logo = () => {
        if (logoName === 'cornellSeal') {
            return CornellLogo;
        } else {
            return CornellLogo;
        }
    };
    const imageName = data.personalImage.name;
    const image = () => {
        if (imageName === 'harrisGrad') {
            return Harris;
        } 
        if (imageName === 'harrisConducting'){
            return Conducting;
        }
        else {
            return Harris;
        }
    };
    const imageVar = image();
    const logoVar = logo();
    const imageSide = data.personalImage.side === 'left' ? true : false;
    return (
        <>
            <div className="about-container">
                <div className="about-content-grid">
                    {imageSide && <img src={imageVar} className="about-img" />}
                    <div className="about-content">
                        <div className="about-content-cornell">
                            <h5>
                                {data.superheading.name}{' '}
                                {data.superheading.period}
                            </h5>
                            <img
                                src={logoVar}
                                className="about-content-cornell-logo"
                            />
                        </div>

                        <div className="about-card-inner">
                            <h1>{data.aboutContent.title}</h1>
                            <div className="about-content-subtitle">
                                <div className="about-content-regular">
                                    <ul className="about-content-list">
                                        <li>
                                            <strong>
                                                {data.aboutContent.one.bold}
                                            </strong>{' '}
                                            {data.aboutContent.one.content}{' '}
                                        </li>
                                        <li>
                                           <strong>
                                                {data.aboutContent.two.bold}
                                            </strong>{' '}
                                            {data.aboutContent.two.content}{' '}
                                        </li>
                                        <li>
                                            <strong>
                                                {data.aboutContent.three.bold}
                                            </strong>{' '}
                                            {data.aboutContent.three.content}{' '}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {!imageSide && <img src={imageVar} className="about-img" />}
                </div>
            </div>
        </>
    );
}
export default AboutCard;
