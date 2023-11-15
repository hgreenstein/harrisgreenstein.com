import React from 'react';
import './experience.css';
import Carousel from 'react-bootstrap/Carousel';
import ExperienceButton from './ExperienceButton';
import ExperienceSwiperList from './ExperienceSwiperList';
import ExperienceSwiperObject from './ExperienceSwipeObject.jsx';
const ExperiencePage = () => {
    const items = ExperienceSwiperList.map((item, index) => (
        <ExperienceSwiperObject
            key={index}
            className="experience-swiper-object"
            data={item}
        />
    ));
    return (
        <>
            <div className="experience-container">
                <div className="experience-title">
                    <h1>My Experience</h1>
                </div>
                <div className="experience-content-grid">
                    {/* <div class="experience-swiper-container">{items}</div> */}
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item interval={2000}>
                            <ExperienceSwiperObject />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <ExperienceSwiperObject />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <ExperienceSwiperObject />
                        </Carousel.Item>
                    </Carousel>

                    <div className="experience-display-content">
                        <div className="experience-buttons">
                            <ExperienceButton />
                            <ExperienceButton />
                            <ExperienceButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExperiencePage;
