import React, { useEffect, useState } from 'react';
import AboutCard from './AboutCard';
import './about.css';
import DarkImage from './assets/circuitDarkExtraLarge.svg';
import Image from './assets/solidCircuitExtraLarge.svg';
import { Parallax } from 'react-parallax';
import mockAboutCards from './mockAboutCards'; // Importing mock data

function About({ darkMode }) {
    const image = darkMode ? DarkImage : Image;
    const [aboutCards, setAboutCards] = useState([]);

    useEffect(() => {
        // Simulating a data fetch
        setTimeout(() => {
            setAboutCards(mockAboutCards);
        }, 1000);
    }, []);

    let generatedCards = <p>Loading...</p>;
    if (aboutCards && aboutCards.length > 0) {
        generatedCards = aboutCards.map((aboutCard, index) => (
            <AboutCard darkMode={darkMode} data={aboutCard} key={index} />
        ));
    }

    return (
        <>
            <Parallax
                bgImage={image}
                blur={0}
                strength={500}
                className="parallax"
                bgClassName="dragon-scales"
            >
                <h1 className="about-header"> About Me </h1>
                {generatedCards}
            </Parallax>
        </>
    );
}

export default About;
