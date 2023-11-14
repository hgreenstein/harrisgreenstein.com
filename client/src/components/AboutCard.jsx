import React, { useState, useCallback, useEffect } from 'react';
import './about.css';
import Harris from '../assets/harrisGradClock.jpg';
import CornellLogo from '../assets/cornellLogo.png';
function AboutCard({ darkMode, data }) {
    const logoName = data.superheading.logo;
    const logo = () => {
        if(logoName === 'cornellSeal'){
            return CornellLogo;
        }
        else{
            return CornellLogo;
        }
    }
    const imageName = data.personalImage.name;
    const image = () => {
        if(imageName === 'harrisGrad'){
            return Harris;
        }
        else{
            return Harris;
        }
    }
    const imageVar = image();
    const logoVar = logo();
    
    return (
        <>
           
                <div className="about-container">
                    <div className="about-content-grid">
                        <div className="about-content">
                            <div className="about-content-cornell">
                                <h5>{data.superheading.name} {data.superheading.period}</h5>
                                <img
                                    src={logoVar}
                                    className="about-content-cornell-logo"
                                />
                            </div>

                            <div className="about-card-inner">
                                <div className="about-content-subtitle">
                                    <h1>{data.aboutContent.title}</h1>
                                </div>
                                <h3 className="about-content-regular">
                                    <strong>
                                    {data.aboutContent.bold}
                                    </strong>{' '}
                                    {data.aboutContent.content}                                
                            </h3>
                            </div>
                        </div>
                        <img src={imageVar} className="about-img" />
                    </div>
                </div>
        </>
    );
}
export default AboutCard;
