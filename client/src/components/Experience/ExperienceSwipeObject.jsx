import React from 'react';
import CatchpointLogo from './assets/catchpointLogoCropped.png';
import TGCSLogo from './assets/giftedLogoTransparent.png';
import AspirisLogo from './assets/aspirisLogoTransparent.png';
import LiongardLogo from './assets/liongardLogo.png';
function ExperienceCatchpointObject() {
    return (
        <>
            <div className="experience-object-container catchpoint-card">
                <div className="experience-object-header">
                    <div className="experience-object-title">
                        <h2>Product Manager Intern</h2>
                        <h4>Catchpoint Systems Inc.</h4>
                        <h6>Jun 2021 - Aug 2021</h6>
                    </div>
                    <img
                        src={CatchpointLogo}
                        alt="Catchpoint Logo"
                        className="experience-object-logo"
                    />
                </div>
                <ul className="experience-object-list">
                    <li>
                        Led the creation of a{' '}
                        <a href="https://www.catchpoint.com/workforce-experience/zoom">
                            VoIP & video feature
                        </a>{' '}
                        for proactive outage alerts and enhanced call quality
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
                <h4 className="experience-object-quote">
                    {' '}
                    <i>
                        "Through meetings with our customer success, sales, and
                        engineering teams, and hearing feedback from customers
                        who requested this feature, I was able to give a much
                        more refined problem and solution definition that I knew
                        better aligned with the potential future users of this
                        feature...The highlight of my time here was getting to
                        work with so many amazing teams of people from all areas
                        of the company to develop such a feature."{' '}
                        <a href="https://www.catchpoint.com/blog/celebrating-the-amazing-work-of-our-2021-interns">
                            {' '}
                            - 2021 Catchpoint Intern Blog{' '}
                        </a>
                    </i>
                </h4>
            </div>
        </>
    );
}
function ExperienceAspirisObject() {
    return (
        <>
            <div className="experience-object-container aspiris-card">
                <div className="experience-object-header">
                    <div className="experience-object-title">
                        <h2>Software Engineer & Field Technician Intern</h2>
                        <h4>Aspiris IT Solutions</h4>
                        <h6>Jun 2022 - Aug 2022</h6>
                    </div>
                    <img
                        src={AspirisLogo}
                        alt="Aspiris Logo"
                        className="experience-object-logo"
                    />
                </div>
                <ul className="experience-object-list">
                    <li>
                        Engineered a solution using RESTful APIs to consolidate
                        data across platforms for accurate billing and cost
                        savings
                    </li>
                    <li>
                        Provided on-site tech support and repairs on PCs,
                        servers, networking equipment, printers, and software
                        upgrades{' '}
                    </li>
                    <li>
                        Led trial and testing of Security Information and Event
                        Management dashboard and alert package{' '}
                    </li>
                </ul>
                <h3>Software Used Includes:</h3>
                <div className ="aspiris-software-container">
                    <img className = "salesforce-logo" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" />
                    <img className = "cisco-logo" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" />
                    <img className= "ninja-logo" src="https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/324418/ninjaOne-logo.png" />
                    <img className="liongard-logo" src={LiongardLogo} />
                </div>
            </div>
        </>
    );
}
function ExperirenceTGCSObject() {
    return (
        <>
            <div className="experience-object-container tgcs-card">
                <div className="experience-object-header">
                    <div className="experience-object-title">
                        <h2>Instructor and Head Counselor</h2>
                        <h4>The Gifted Child Society</h4>
                        <h6>June 2017 - Jan 2021</h6>
                    </div>
                    <img
                        src={TGCSLogo}
                        alt="Gifted Child Society Logo"
                        className="experience-object-logo"
                    />
                </div>
                <ul className="experience-object-list">
                    <li>
                        <h6>Instructor</h6>
                        <ul className="experience-tgcs-list">
                           <li>Taught classes for gifted children grades K-8 during the summer and weekends during the school year</li>
                           <li>Created original curricula in <i>Python, Java, 3D Modeling, Stock Market, Chess, and Rubik’s Cube solving</i></li>
                           <li>Adapted curricula for online learning environment during pandemic, supervised assistants, and provided graded feedback</li> 
                        </ul>
                    </li>
                    <li>
                        <h6>Head Counselor</h6>
                       <ul className="experience-tgcs-list">
                            <li>Supervised team of counselors, chaperoned and supervised up to 15 gifted and talented children through STEM workshops</li>
                            <li>Acted as liaison between supporting counselors and camp directors by communicating issues and resolving disputes</li>
                        </ul>     
                    </li>
                </ul>
                           </div>
        </>
    );
}
export { ExperienceAspirisObject, ExperienceCatchpointObject, ExperirenceTGCSObject };
