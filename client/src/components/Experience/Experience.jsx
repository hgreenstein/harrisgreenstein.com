import React from 'react';
import './experience.css';
import Carousel from 'react-bootstrap/Carousel';
import ExperienceButton from './ExperienceButton';
import {
    ExperienceAspirisObject,
    ExperienceCatchpointObject,
} from './ExperienceSwipeObject.jsx';
import CatchpointLogo from './assets/catchpointLogoCropped.png';
const ExperiencePage = () => {
    return (
        <>
            <div className="experience-container">
                <div className="experience-title">
                    <h1>My Experience</h1>
                </div>
                <div className="experience-display-content">
                    <div className="experience-buttons">
                        <ExperienceButton Image={CatchpointLogo} />
                        <ExperienceButton
                            Image={
                                'https://aspiris.com/wp-content/uploads/2020/07/Aspiris-logo.png'
                            }
                        />
                        <ExperienceButton />
                    </div>
                </div>

                <div className="experience-content-grid">
                    {/* <div class="experience-swiper-container">{items}</div> */}
                    <Carousel data-bs-theme="dark" auto={false}>
                        <Carousel.Item>
                            <ExperienceAspirisObject />
                        </Carousel.Item>
                        <Carousel.Item>
                            <ExperienceCatchpointObject />
                        </Carousel.Item>
                        <Carousel.Item>
                            <ExperienceCatchpointObject />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default ExperiencePage;
