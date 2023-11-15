import React, { useEffect, useState } from 'react';
import AboutCard from './AboutCard';
import './about.css';
import DarkImage from './assets/circuitDark.svg';
import Image from './assets/solidCircuit.svg';
import { Parallax, Background } from 'react-parallax';
import axios from 'axios';
function About({ darkMode }) {
    const image = darkMode ? DarkImage : Image;
    const [aboutCards, setAboutCards] = useState([]);
    useEffect(() => {
        axios
            .get('/api/aboutcards/all')
            .then((response) => {
                console.log(response);
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
                <h1 className="about-header"> About Me </h1>
                {generatedCards}
            </Parallax>
        </>
    );
}
export default About;
