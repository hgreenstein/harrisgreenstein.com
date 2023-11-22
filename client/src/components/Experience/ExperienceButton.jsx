import React from 'react';
import './experience.css';
function ExperienceButton({ Image, onClickIndex, onClickFunction }) {
    return (
        <>
            <button
                className="experience-button"
                onClick={() => onClickFunction(onClickIndex)}
            >
                <img
                    src={Image}
                    alt="Catchpoint Logo"
                    className="experience-button-image"
                />
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
