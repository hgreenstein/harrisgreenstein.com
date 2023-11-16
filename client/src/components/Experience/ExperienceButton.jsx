import React from 'react';
import './experience.css';
import CatchpointLogo from './assets/catchpointLogo.png'
function ExperienceButton({Image}) {
    return (
        <>
            <button className="experience-button">
                    <img src={Image} alt="Catchpoint Logo" className="experience-button-image"/>
                    <div className="button-overlay">
                        <div className="button-overlay-content">
                        <h3>Product Manager Intern</h3>
                        <p>June 2021 - August 2021</p>
                        </div>
                    </div>
            </button>
        </>
    );
}
export default ExperienceButton;
