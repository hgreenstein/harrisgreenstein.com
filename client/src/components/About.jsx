import React, { useState, useCallback, useEffect } from 'react';
import './about.css';
import { Parallax, Background } from 'react-parallax';
import Image from '../assets/solidCircuit.svg';
import Harris from '../assets/harrisGradClock.jpg';
import DarkImage from '../assets/circuitDark.svg';
import CornellLogo from '../assets/cornellLogo.png';
import axios from "axios";
function About({ darkMode }) {
    const image = darkMode ? DarkImage : Image;
    const [values, setValues] = useState([]);
    const [value, setValue] = useState([]);
    const getValues = useCallback(async () => {
        const dbValues = await axios.get('/api/values/all');
        console.log(dbValues);
        const dbValuesProcessed = dbValues.data.rows.map(row => row.number);
        console.log(`Here are the values ${dbValuesProcessed}`)
        setValues(dbValuesProcessed);
    }, []);
    const saveNumber = useCallback(async (event) => {
        event.preventDefault();
        await axios.post('/api/values', {
            value
        });
        setValue("");
        getValues();
    }, [value, getValues]);
    useEffect(() => {
        getValues();
    }, []);
    return (
        <>
            <Parallax
                bgImage={image}
                blur={0}
                strength={500}
                className="parallax"
                bgClassName="dragon-scales"
            >
                <div className="about-container">
                    <h1> About Me </h1>
                    <div className="about-content-grid">
                        <div className="about-content">
                            <div className="about-content-cornell">
                                <h5>Cornell University 2019 - 2023</h5>
                                <img
                                    src={CornellLogo}
                                    className="about-content-cornell-logo"
                                />
                            </div>

                            <div className="about-card-inner">
                                <h1>My Education</h1>
                                <div className="about-content-subtitle">
                                    <h3 className="about-content-regular">
                                        <strong>
                                            As a recent computer science
                                            graduate
                                        </strong>{' '}
                                        from Cornell University's College of
                                        Engineering with a minor in Business for
                                        Engineers, I spent my education learning
                                        about how to use technology to shape the
                                        businesses of tomorrow.
                                    </h3>
                                    <button onClick={getValues}>Get all numbers</button>
                                    <div className="values">
                                        {values.map(value => (
                                            <div className="value">{value}</div>
                                        ))}
                                    </div>
                                </div>
                                <form className="form" onSubmit={saveNumber}>
                                    <label>Enter your value:</label>
                                    <input value={value} onChange={((event) => { setValue(event.target.value) })} />
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                        <img src={Harris} className="about-img" />
                    </div>
                </div>
            </Parallax>
        </>
    );
}
export default About;
