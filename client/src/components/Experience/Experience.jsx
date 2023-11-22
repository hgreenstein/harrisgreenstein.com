import React, { useState } from 'react';
import './experience.css';
import Carousel from 'react-bootstrap/Carousel';
import ExperienceButton from './ExperienceButton';
import {
    ExperienceAspirisObject,
    ExperienceCatchpointObject,
    ExperirenceTGCSObject,
} from './ExperienceSwipeObject.jsx';
import CatchpointLogo from './assets/catchpointLogoCropped.png';
import TGCSLogo from './assets/giftedLogo.png';
const ExperiencePage = () => {
    const [cardIndex, setCardIndex] = useState(0);
    const handleCardIndex = (selectedIndex) => {
        console.log(selectedIndex);
        setCardIndex(selectedIndex);
    };
    return (
        <>
            <div className="experience-container">
                <div className="experience-title">
                    <h1>My Experience</h1>
                </div>
                <div className="experience-display-content">
                    <div className="experience-buttons">
                        <ExperienceButton
                            Image={
                                'https://aspiris.com/wp-content/uploads/2020/07/Aspiris-logo.png'
                            }
                            onClickIndex={0}
                            onClickFunction={handleCardIndex}
                        />
                        <ExperienceButton
                            Image={CatchpointLogo}
                            onClickIndex={1}
                            onClickFunction={handleCardIndex}
                        />
                        <ExperienceButton
                            Image={TGCSLogo}
                            onClickIndex={2}
                            onClickFunction={handleCardIndex}
                        />
                    </div>
                </div>

                <div className="experience-content-grid">
                    {/* <div class="experience-swiper-container">{items}</div> */}
                    <Carousel
                        data-bs-theme="dark"
                        activeIndex={cardIndex}
                        onSelect={handleCardIndex}
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
            </div>
        </>
    );
};

export default ExperiencePage;
