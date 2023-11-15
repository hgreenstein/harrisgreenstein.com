import React from 'react';
import CatchpointLogo from './assets/catchpointLogo.png';
function ExperienceSwiperObject({ data }) {
    return (
        <>
            <div className="experience-object-container">
                <h2>Catchpoint Systems Inc.</h2>
                <h3>Product Manager Intern</h3>
                <img src={CatchpointLogo} alt="Catchpoint Logo" />
                <ul>
                    <li>
                        Led the creation of a VoIP & video feature for proactive
                        outage alerts and enhanced call quality
                    </li>
                    <li>
                        Managed product development through agile methodologies,
                        coordinating with customer experience, engineering,
                        marketing, UX, and other teams
                    </li>
                    <li>
                        Constructed Press Release and Frequently Asked Questions
                        (PRFAQ) to serve as unified outline for team across
                        departments
                    </li>
                </ul>
            </div>
        </>
    );
}
export default ExperienceSwiperObject;
