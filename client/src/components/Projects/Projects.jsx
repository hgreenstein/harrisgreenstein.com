import React from 'react';
import './projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import SemantleLogo from './assets/semantleLogo.png';
import StarlinkSatellites from './assets/starlink.png';
import ApiIcon from './assets/restfulAPILogo.svg';
import RipeIcon from './assets/ripeLogo.svg';
import PythonLogo from './assets/pythonLogo.png';
import StarlinkLogo from './assets/starlinkLogo.svg';
import PytorchLogo from './assets/pytorchLogo.svg';
import SklearnLogo from './assets/sklearnLogo.svg';
import NumPyLogo from './assets/numpyLogo.svg';
import HarrisGreensteinLogo from './assets/harrisGreensteinWebsite.png';
import ReactLogo from './assets/reactLogo.svg';
import NodeJSLogo from './assets/nodejsLogo.svg';
import ExpressLogo from './assets/expressLogo.svg';
import PostgresqlLogo from './assets/postgresqlLogo.svg';
import JavascriptLogo from './assets/javascriptLogo.svg';
import DockerLogo from './assets/dockerLogo.svg';
import NginxLogo from './assets/nginxLogo.svg';
import HtmlLogo from './assets/htmlLogo.svg';
import CssLogo from './assets/cssLogo.svg';
import BootstrapLogo from './assets/bootstrapLogo.svg';
import StarlinkReport from './assets/starlinkReport.pdf';
import SemantleReport from './assets/semantleReport.pdf';
function Projects() {
    return (
        <section className="projects" id="projects">
            <h1 className="projects-heading">Projects</h1>
            <div className="project-card-container">
                <Card>
                    <Card.Img variant="top" src={HarrisGreensteinLogo} />
                    <Card.Body>
                        <Card.Title>
                            Full Stack Development: harrisgreenstein.com
                        </Card.Title>
                        <Card.Text>
                            <ul className="experience-inner-list">
                                <li>
                                    This second iteration of
                                    harrisgreenstein.com evolved from using only
                                    bare HTML/CSS/JS to full stack development
                                    mainly utilizing the PERN stack for language
                                    consistency
                                </li>
                                <li>
                                    The front-end is mainly React.JS utilizing
                                    hooks, components, and libraries while the
                                    backend is served via a NodeJs server
                                    servering as a Restful API for a PostgreSQL
                                    database
                                </li>
                                <li>
                                    Express serves as the middleware between the
                                    API and the frontend while NGINX quickly
                                    serves the static frontend content and
                                    serves as a middle-end reverse proxy in the
                                    docker container
                                </li>
                                <li>
                                    The entire application is dockerized for
                                    easy and consistent deployment on different
                                    linux host servers and local development
                                </li>
                            </ul>
                        </Card.Text>
                        <Button
                            variant="primary"
                            href="https://github.com/hgreenstein/harrisgreenstein.com"
                            target="_blank"
                        >
                            View the Github
                        </Button>
                    </Card.Body>
                    <Card.Footer>
                        <div className="card-footer-container">
                            <h4>Technologies Used:</h4>
                            <div className="card-footer-icons card-top-list">
                                <img src={PostgresqlLogo} />
                                <img src={ExpressLogo} />
                                <img src={ReactLogo} />
                                <img src={NodeJSLogo} />
                                <img src={NginxLogo} />
                            </div>
                            <div className="card-footer-icons">
                                <img src={DockerLogo} />
                                <img src={JavascriptLogo} />
                                <img src={HtmlLogo} />
                                <img src={CssLogo} />
                                <img src={BootstrapLogo} />
                            </div>
                        </div>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={SemantleLogo} />
                    <Card.Body>
                        <Card.Title>AI Semantle Solver</Card.Title>
                        <Card.Text>
                            <ul className="experience-inner-list">
                                <li>
                                    Created AI-driven word guessing game solver
                                    using Hierarchical Q-learning and Recurrent
                                    Neural Networks{' '}
                                </li>
                                <li>
                                    Leveraged natural language processing models
                                    and unsupervised clustering to capture word
                                    similarities and relationships{' '}
                                </li>
                                <li>
                                    Collaborated with project team to design and
                                    test multiple machine learning
                                    implementations and evaluate performance{' '}
                                </li>
                                <li>
                                    Demonstrated word relational understandings
                                    far faster and more accurate than average
                                    human performance in multiple tests
                                </li>
                            </ul>
                        </Card.Text>
                        <div className="project-buttons">
                            <Button
                                variant="primary"
                                href={SemantleReport}
                                target="_blank"
                            >
                                Read The Report
                            </Button>
                            <Button
                                variant="primary"
                                href="https://drive.google.com/file/d/1Z2H_FXM7ViGIDVOmaozgDngUAEcA0D1E/view?usp=sharing"
                                target="_blank"
                            >
                                Watch the Presentation
                            </Button>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <div className="card-footer-container">
                            <h4>Technologies Used:</h4>
                            <div className="card-footer-icons">
                                <img src={PythonLogo} />
                                <img src={PytorchLogo} />
                                <img src={SklearnLogo} />
                                <img src={NumPyLogo} />
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={StarlinkSatellites} />
                    <Card.Body>
                        <Card.Title>Starlink Latency Analysis</Card.Title>
                        <Card.Text>
                            <ul className="experience-inner-list">
                                <li>
                                    Analyzed global performance analysis of
                                    Starlink’s internet service, focusing on
                                    impact of location and time on latency
                                </li>
                                <li>
                                    Utilized Python and RIPE Atlas API to
                                    collect and analyze latency data from 25
                                    globally distributed probes
                                </li>
                                <li>
                                    Performed statistical data analysis based on numerous geographic factors and correlated performance metrics with satellite and ground station trace-route locations
                                </li>
                                <li>
                                    Concluded Starlink does not consistently
                                    meet its advertised latency and documented
                                    overrepresentations of coverage areas
                                </li>
                            </ul>
                        </Card.Text>
                        <div className="project-buttons">
                            <Button
                                variant="primary"
                                href={StarlinkReport}
                                target="_blank"
                            >
                                Read the Report
                            </Button>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <div className="card-footer-container">
                            <h4>Technologies Used:</h4>
                            <div className="card-footer-icons">
                                <img src={PythonLogo} />
                                <img src={RipeIcon} />
                                <img src={ApiIcon} />
                                <img src={StarlinkLogo} />
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        </section>
    );
}
export default Projects;
