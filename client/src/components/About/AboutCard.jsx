import React, { useRef } from 'react';
import './about.css';
import Harris from './assets/harrisGradClock.jpg';
import CornellLogo from './assets/cornellLogo.png';
import Conducting from './assets/pepBand.jpg';
import Marching from './assets/harrisMarchingCropped.jpg';
import useAnimateOnObserve from '../../Custom-Hooks/useAnimateOnObserve.js';
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
        if (imageName === 'harrisConducting') {
            return Conducting;
        } else {
            return Marching;
        }
    };
    const imageVar = image();
    const logoVar = logo();
    const cardImage = useRef(null);
    const cardContent = useRef(null);
    const imageSide = data.personalImage.side === 'left' ? true : false;
    const imageClass = imageSide
        ? 'about-image-animate-left'
        : 'about-image-animate-right';
    const contentClass = imageSide
        ? 'about-card-animate-right'
        : 'about-card-animate-left';
    useAnimateOnObserve(cardImage, imageClass, {
        rootMargin: '0px',
        threshold: 0.05,
    });
    useAnimateOnObserve(cardContent, contentClass, {
        rootMargin: '0px',
        threshold: 0.05,
    });
    return (
        <>
            <div
                className="about-container"
                id={imageName === 'harrisConducting' ? 'leadership' : undefined}
            >
                <div className="about-content-grid">
                    {imageSide && (
                        <img
                            src={imageVar}
                            className="about-img left-img"
                            ref={cardImage}
                        />
                    )}
                    <div className="about-content" ref={cardContent}>
                        <div className="about-content-cornell">
                            <h5>
                                {data.superheading.name}{' '}
                                {data.superheading.name ===
                                'Music and Teamworking: Marching Band' ? (
                                    <br />
                                ) : undefined}
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
                    {!imageSide && <img src={imageVar} className="about-img" ref={cardImage}/>}
                </div>
            </div>
        </>
    );
}
export default AboutCard;
