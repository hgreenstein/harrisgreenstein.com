CREATE DATABASE portfolio;

CREATE TABLE aboutcards(
    id SERIAL PRIMARY KEY,
    superheading_title VARCHAR(255),
    superheading_time VARCHAR(255),
    superheading_logo VARCHAR(255),    
    about_title VARCHAR(255),
    about_bold VARCHAR(255),
    about_content TEXT,
    personal_image_name VARCHAR(255) 
);

INSERT INTO aboutcards (
    superheading_title,
    superheading_time,  
    superheading_logo,   
    about_title,     
    about_bold,
    about_content,     
    personal_image_name ) 
VALUES (
    'Cornell University', 
    '2019 - 2023',
    'cornellSeal',
    'My Education',
    'As a recent computer science graduate',
    'from Cornell University''s College of Engineering with a minor in Business for Engineers, I spent my education learning about how to use technology to shape the businesses of tomorrow.',
    'harrisGrad'
);

