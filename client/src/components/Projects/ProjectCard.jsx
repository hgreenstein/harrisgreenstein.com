import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectCard = ({ imgSrc, title, description, buttons, footerIcons }) => {
      const renderFooterIcons = (icons, additionalClassName = '') => (
        <div className={`card-footer-icons ${additionalClassName}`}>
            {icons.map((icon, index) => <img key={index} src={icon} />)}
        </div>
    );

    const shouldSplitIcons = footerIcons.length > 5;
    const firstRowIcons = shouldSplitIcons ? footerIcons.slice(0, 5) : footerIcons;
    const secondRowIcons = shouldSplitIcons ? footerIcons.slice(5) : [];
    return (
        <Card>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <ul className="experience-inner-list">
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Card.Text>
                <div className="project-buttons">
                    {buttons.map((button, index) => (
                        <Button key={index} variant="primary" href={button.href} target="_blank">
                            {button.text}
                        </Button>
                    ))}
                </div>
            </Card.Body>
            <Card.Footer>
                <div className="card-footer-container">
                    <h4>Technologies Used:</h4>
                    {renderFooterIcons(firstRowIcons, shouldSplitIcons ? 'card-top-list' : '')}
                    {shouldSplitIcons && renderFooterIcons(secondRowIcons)}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default ProjectCard;

