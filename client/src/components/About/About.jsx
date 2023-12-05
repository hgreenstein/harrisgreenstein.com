import React, { useEffect, useState } from 'react';
import AboutCard from './AboutCard';
import './about.css';
import DarkImage from './assets/circuitDark.svg';
import Image from './assets/solidCircuit.svg';
import { Parallax, Background } from 'react-parallax';
import axios from 'axios';
import DarkImageMedium from './assets/darkMedium.svg';
import ImageMedium from './assets/lightMedium.svg';
import DarkImageMobile from './assets/darkMobile.svg';
import ImageMobile from './assets/lightMobile.svg';

function About({ darkMode }) {
    const [image, setImage] = useState(determineImage());
    // const image = darkMode ? DarkImage : Image;
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
        } else if (useMobile) {
            return darkMode ? DarkImageMobile : ImageMobile;
        } else {
            return darkMode ? DarkImage : Image;
        }
    }
    useEffect(() => {
        axios
            .get('/api/aboutcards/all')
            .then((response) => {
                const transformedData = response.data.rows.map((item) => ({
                    superheading: {
                        name: item.superheading_title,
                        period: item.superheading_time,
                        logo: item.superheading_logo,
                    },
                    aboutContent: {
                        title: item.about_title,
                        one: {
                            bold: item.about_one_bold,
                            content: item.about_one_content,
                        },
                        two: {
                            bold: item.about_two_bold,
                            content: item.about_two_content,
                        },
                        three: {
                            bold: item.about_three_bold,
                            content: item.about_three_content,
                        },
                    },
                    personalImage: {
                        name: item.personal_image_name,
                        side: item.personal_image_side,
                    },
                }));

                setAboutCards(transformedData);
            })
            .catch((error) => {
                console.error(
                    'There was an error fetching the About Cards:',
                    error
                );
            });
    }, []);
    let generatedCards = <p>Loading</p>;
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
