import React, { useState, useEffect, useRef } from 'react';
import './experience.css';
import Carousel from 'react-bootstrap/Carousel';
import ExperienceButton from './ExperienceButton';
import {
    ExperienceAspirisObject,
    ExperienceCatchpointObject,
    ExperirenceTGCSObject,
} from './ExperienceSwipeObject.jsx';
import CatchpointLogo from './assets/catchpointLogoCropped.png';
import TGCSLogo from './assets/giftedLogoTransparent.png';
import AspirisLogo from './assets/aspirisLogoTransparent.png';
import Resume from './assets/Harris_Greenstein_Resume.pdf';
const ExperiencePage = () => {
    const [cardIndex, setCardIndex] = useState(0);
    const [delay, setDelay] = useState(7000);
    const backgroundContainer = useRef(null);
    const handleExperienceButton = (selectedIndex) => {
        setDelay(null);
        handleCardIndex(selectedIndex);
        setTimeout(() => {
            setDelay(7000);
        }, 30000);
    };
    const handleCardIndex = (selectedIndex) => {
        setCardIndex(selectedIndex);
        if (backgroundContainer.current) {
            setTimeout(() => {
                switch (selectedIndex) {
                    case 0:
                        backgroundContainer.current.classList.remove(
                            'tgcs-background'
                        );
                        backgroundContainer.current.classList.remove(
                            'catchpoint-background'
                        );
                        backgroundContainer.current.classList.add(
                            'aspiris-background'
                        );
                        break;
                    case 1:
                        backgroundContainer.current.classList.remove(
                            'tgcs-background'
                        );
                        backgroundContainer.current.classList.remove(
                            'aspiris-background'
                        );
                        backgroundContainer.current.classList.add(
                            'catchpoint-background'
                        );
                        break;
                    case 2:
                        backgroundContainer.current.classList.remove(
                            'aspiris-background'
                        );
                        backgroundContainer.current.classList.remove(
                            'catchpoint-background'
                        );
                        backgroundContainer.current.classList.add(
                            'tgcs-background'
                        );
                        break;
                }
                backgroundContainer.current.style.opacity = 1;
            }, 250);
        }
    };
    useEffect(() => {
        handleCardIndex(0);
    }, []);
    return (
        <>
            <div
                className="experience-container"
                ref={backgroundContainer}
                id="background-container"
            >
                <div className="experience-title">
                    <h1>My Experience</h1>
                </div>
                <div className="experience-display-content">
                    <div className="experience-buttons">
                        <ExperienceButton
                            Image={AspirisLogo}
                            onClickIndex={0}
                            onClickFunction={handleExperienceButton}
                            jobTitle="Software Engineer & Field Tech Intern"
                        />
                        <ExperienceButton
                            Image={CatchpointLogo}
                            onClickIndex={1}
                            onClickFunction={handleExperienceButton}
                            jobTitle="Product Manager Intern"
                        />
                        <ExperienceButton
                            Image={TGCSLogo}
                            onClickIndex={2}
                            onClickFunction={handleExperienceButton}
                            jobTitle="Instructor and Head Counselor"
                        />
                    </div>
                </div>

                <div className="experience-content-grid">
                    {/* <div class="experience-swiper-container">{items}</div> */}
                    <Carousel
                        data-bs-theme="dark"
                        activeIndex={cardIndex}
                        onSelect={handleCardIndex}
                        touch={true}
                        interval={delay}
                    >
                        <Carousel.Item>
                            <ExperienceAspirisObject />
                        </Carousel.Item>
                        <Carousel.Item>
                            <ExperienceCatchpointObject />
                        </Carousel.Item>
                        <Carousel.Item>
                            <ExperirenceTGCSObject />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="resume-button-container">
                    <a href={Resume} target="_blank" className="resume-button">
                        View My Resume Here
                    </a>
                </div>
            </div>
        </>
    );
};

export default ExperiencePage;
