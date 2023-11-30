import React, { useEffect, useState } from 'react';
import AboutCard from './AboutCard';
import './about.css';
import DarkImage from './assets/circuitDarkExtraLarge.svg';
import Image from './assets/solidCircuitExtraLarge.svg';
import { Parallax } from 'react-parallax';
import mockAboutCards from './mockAboutCards'; // Importing mock data
import DarkImageMedium from './assets/darkMedium.svg';
import ImageMedium from './assets/lightMedium.svg';
import DarkImageMobile from './assets/darkMobile.svg';
import ImageMobile from './assets/lightMobile.svg';
function About({ darkMode }) {
    // const image = darkMode ? DarkImage : Image;
    const [image, setImage] = useState(determineImage()); 
    const [aboutCards, setAboutCards] = useState([]);
    useEffect(() => {
        const handleResize = () => {
            setImage(determineImage());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
 
    function determineImage() {
        const width = window.innerWidth;
        const useMedium = width < 1024 && width > 512;
        const useMobile = width < 512;
        if (useMedium) {
            return darkMode ? DarkImageMedium : ImageMedium;
        } 
        else if(useMobile){
            return darkMode ? DarkImageMobile : ImageMobile; 
        }
        else {
            return darkMode ? DarkImage : Image;
        }
    }
    useEffect(() => {
        // Simulating a data fetch
        setTimeout(() => {
            setAboutCards(mockAboutCards);
        }, 10);
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
                <h1 className="about-header" id="about">
                    {' '}
                    About Me{' '}
                </h1>
                {generatedCards}
            </Parallax>
        </>
    );
}

export default About;
