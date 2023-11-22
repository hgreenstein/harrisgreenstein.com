import React from 'react';
import './experience.css';
function ExperienceButton({ Image, onClickIndex, onClickFunction, jobTitle }) {
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
                        <h3>{jobTitle}</h3>
                    </div>
                </div>
            </button>
        </>
    );
}
export default ExperienceButton;
