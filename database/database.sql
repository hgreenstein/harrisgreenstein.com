CREATE DATABASE portfolio;

CREATE TABLE aboutcards(
    id SERIAL PRIMARY KEY,
    superheading_title VARCHAR(255),
    superheading_time VARCHAR(255),
    superheading_logo VARCHAR(255),    
    about_title VARCHAR(255),
    about_one_bold TEXT,
    about_one_content TEXT,
    about_two_bold TEXT,
    about_two_content TEXT,
    about_three_bold TEXT,
    about_three_content TEXT, 
    personal_image_name VARCHAR(255),
    personal_image_side VARCHAR(255)
);

INSERT INTO aboutcards (
    superheading_title,
    superheading_time,  
    superheading_logo,   
    about_title,     
    about_one_bold,
    about_one_content, 
    about_two_bold, 
    about_two_content, 
    about_three_bold, 
    about_three_content, 
    personal_image_name,
    personal_image_side) 
VALUES (
    'Cornell University, B.Sc. Computer Science, Minor in Business for Engineers,', 
    '2019 - 2023',
    'cornellSeal',
    'My Education',
    'Advanced Technical Curriculum:',
    'Mastered complex concepts in Object-Oriented and Functional Programming, Networking, Embedded Systems, AI, and more, ensuring a deep technical understanding and practical application skills in computer science.',
    'Practical Projects:',
    'Developed an AI agent that utilized neural networks, and NLP and analyzed the worldwide network coverage of Starlink Satellite Internet, learn more in projects.',
    'Business Mindset:',
    'Studies in business were pivotal in linking C.S. principles with their practical applications, ensuring technical solutions are grounded in solid business strategies.',
    'harrisGrad',
    'right'
);
INSERT INTO aboutcards (
superheading_title,
superheading_time,  
superheading_logo,   
about_title,     
about_one_bold,
about_one_content, 
about_two_bold, 
about_two_content, 
about_three_bold, 
about_three_content, 
personal_image_name,
personal_image_side) 
VALUES (
'Cornell University Big Red Pep Band Conductor', 
'2019 - 2023',
'cornellSeal',
'Leadership',
'Dynamic Team Leadership:',
'Led weekly rehearsals for a 100+-member band, focusing on musical excellence and teamwork.',
'Performance Excellence at Major Events:',
'Conducted at high-energy sporting events, enhancing game atmospheres and audience engagement.',
'Innovative Feedback Integration:',
'Introduced a voting system for music selection, boosting leadership satisfaction and team collaboration.',
'harrisConducting',
'left'
);

