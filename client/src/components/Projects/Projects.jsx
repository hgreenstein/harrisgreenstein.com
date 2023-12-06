import React from "react";
import "./projects.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import SemantleLogo from "./assets/semantleLogo.png";
import StarlinkSatellites from "./assets/starlink.png";
import ApiIcon from "./assets/restfulAPILogo.svg";
import RipeIcon from "./assets/ripeLogo.svg";
import PythonLogo from "./assets/pythonLogo.png";
import StarlinkLogo from "./assets/starlinkLogo.svg";
import PytorchLogo from "./assets/pytorchLogo.svg";
import SklearnLogo from "./assets/sklearnLogo.svg";
import NumPyLogo from "./assets/numpyLogo.svg";
import HarrisGreensteinLogo from "./assets/harrisGreensteinWebsite.png";
import ReactLogo from "./assets/reactLogo.svg";
import NodeJSLogo from "./assets/nodejsLogo.svg";
import ExpressLogo from "./assets/expressLogo.svg";
import PostgresqlLogo from "./assets/postgresqlLogo.svg";
import JavascriptLogo from "./assets/javascriptLogo.svg";
import DockerLogo from "./assets/dockerLogo.svg";
import NginxLogo from "./assets/nginxLogo.svg";
import HtmlLogo from "./assets/htmlLogo.svg";
import CssLogo from "./assets/cssLogo.svg";
import BootstrapLogo from "./assets/bootstrapLogo.svg";
import StarlinkReport from "./assets/starlinkReport.pdf";
import SemantleReport from "./assets/semantleReport.pdf";
import ProjectCard from "./ProjectCard";
function Projects() {
    const projectDetails = [
        {
            imgSrc: HarrisGreensteinLogo,
            title: "Full Stack Development: harrisgreenstein.com",
            description: [
                "This second iteration of harrisgreenstein.com evolved from using only bare HTML/CSS/JS to full stack development mainly utilizing the PERN stack for language consistency",
                " The front - end is mainly React.JS utilizing hooks, components, and libraries while the backend is served via a NodeJs server servering as a Restful API for a PostgreSQL database",
                "Express serves as the middleware between the API and the frontend while NGINX quickly serves the static frontend content and serves as a middle-end reverse proxy in the docker container",
                "The entire application is dockerized for easy and consistent deployment on different linux host servers and local development",
            ],
            buttons: [
                {
                    href: "https://github.com/hgreenstein/harrisgreenstein.com",
                    text: "View the Github",
                },
            ],
            footerIcons: [
                PostgresqlLogo,
                ExpressLogo,
                ReactLogo,
                NodeJSLogo,
                NginxLogo,
                DockerLogo,
                JavascriptLogo,
                HtmlLogo,
                CssLogo,
                BootstrapLogo,
            ],
        },
        {
            imgSrc: SemantleLogo,
            title: "AI Semantle Solver",
            description: [
                "Created AI-driven word guessing game solver using Hierarchical Q-learning and Recurrent Neural Networks",
                "Leveraged natural language processing models and unsupervised clustering to capture word similarities and relationships",
                "Collaborated with project team to design and test multiple machine learning implementations and evaluate performance",
                "Demonstrated word relational understandings far faster and more accurate than average human performance in multiple tests",
            ],
            buttons: [
                { href: SemantleReport, text: "Read The Report" },
                {
                    href:
                        "https://drive.google.com/file/d/1Z2H_FXM7ViGIDVOmaozgDngUAEcA0D1E/view?usp=sharing",
                    text: "Watch the Presentation",
                },
            ],
            footerIcons: [PythonLogo, PytorchLogo, SklearnLogo, NumPyLogo],
        },
        {
            imgSrc: StarlinkSatellites,
            title: "Starlink Latency Analysis",
            description: [
                "Analyzed global performance analysis of Starlink’s internet service, focusing on impact of location and time on latency",
                "Utilized Python and RIPE Atlas API to collect and analyze latency data from 25 globally distributed probes",
                "Performed statistical data analysis based on numerous geographic factors and correlated performance metrics with satellite and ground station trace-route locations",
                "Concluded Starlink does not consistently meet its advertised latency and documented overrepresentations of coverage areas",
            ],
            buttons: [
                { href: StarlinkReport, text: "Read the Report" },
            ],
            footerIcons: [PythonLogo, RipeIcon, ApiIcon, StarlinkLogo],
        },
    ];
    return (
        <section className="projects" id="projects">
            <h1 className="projects-heading">Projects</h1>
            <div className="project-card-container">
                {projectDetails.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
export default Projects;
