import React from 'react';
import CatchpointLogo from './assets/catchpointLogoCropped.png';
function ExperienceCatchpointObject() {
    return (
        <>
            <div className="experience-object-container">
                <div className="experience-object-header">
                    <div className="experience-object-title">
                        <h2>Product Manager Intern</h2>
                        <h4>Catchpoint Systems Inc.</h4>
                    </div>
                    <img
                        src={CatchpointLogo}
                        alt="Catchpoint Logo"
                        className="experience-object-logo"
                    />
                </div>
                <ul className="experience-object-list">
                    <li>
                        Led the creation of a <a href="https://www.catchpoint.com/workforce-experience/zoom">VoIP & video feature</a> for proactive
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
                <h4 className="experience-object-quote">                    <i>"Through meetings with our customer success, sales, and engineering teams, and hearing feedback from customers who requested this feature, I was able to give a much more refined problem and solution definition that I knew better aligned with the potential future users of this feature...The highlight of my time here was getting to work with so many amazing teams of people from all areas of the company to develop such a feature." <a href="https://www.catchpoint.com/blog/celebrating-the-amazing-work-of-our-2021-interns"> - 2021 Catchpoint Intern Blog </a></i>
                </h4>
            </div>
        </>
    );
}
function ExperienceAspirisObject() {
    return (
        <>
            <div className="experience-object-container">
                <div className="experience-object-header">
                    <div className="experience-object-title">
                        <h2>Software Engineer & Field Technician Intern</h2>
                        <h4>Aspiris IT Solutions</h4>
                    </div>
                    <img
                        src="https://aspiris.com/wp-content/uploads/2020/07/Aspiris-logo.png"
                        alt="Aspiris Logo"
                        className="experience-object-logo"
                    />
                </div>
                <ul className="experience-object-list">
                    <li>Engineered a solution using RESTful APIs to consolidate data across platforms for accurate billing and cost savings</li>
                    <li>
                       Provided on-site tech support and repairs on PCs, servers, networking equipment, printers, and software upgrades                    </li>
                    <li>
                        Led trial and testing of Security Information and Event Management dashboard and alert package                    </li>
                </ul>
                <h4 className="experience-object-quote">
                    <i>"Through meetings with our customer success, sales, and engineering teams, and hearing feedback from customers who requested this feature, I was able to give a much more refined problem and solution definition that I knew better aligned with the potential future users of this feature...The highlight of my time here was getting to work with so many amazing teams of people from all areas of the company to develop such a feature." <a href="https://www.catchpoint.com/blog/celebrating-the-amazing-work-of-our-2021-interns"> - 2021 Catchpoint Intern Blog </a></i>
                </h4>
            </div>
        </>
    );
}
export {ExperienceAspirisObject, ExperienceCatchpointObject};
