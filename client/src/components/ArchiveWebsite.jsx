import Image11 from "../assets/purchaseFunnel.png"; 
import Image10 from "../assets/starlink.png"; 
import Image9 from "../assets/semantle-logo.png"; 
import Image8 from "../assets/catchpoint-zoom.png"; 
import Image7 from "../assets/gifted_child_society.png"; 
import Image6 from "../assets/tgcs_star.png"; 
import Image5 from "../assets/logo_catchpoint.png"; 
import Image4 from "../assets/Aspiris-logo.png"; 
import Image3 from "../assets/Conducting_at_Lynah.jpg";
import Image2 from "../assets/cornell-logo.png";
import './archive.css'
import Image1 from "../assets/_DSF1805.jpg";
function ArchiveWebsite() {
    return(
    <>

<head>
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <script src='https://www.google.com/recaptcha/api.js' async defer></script>
</head>

<div className="body">
    <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <a href="#projects">Projects</a>
        <a href="#coursework">Coursework</a>
    </nav>

    <section className="section home" id="home">
        <div className="home-image"></div>
        <div className="home-text display-text">
            <h1>Harris Greenstein</h1>
            <p>Cornell Engineering Computer Science Graduate | Dyson Applied Economic Management Graduate</p>
        </div>
    </section>

    <section id="about" className="section">
        <div className="display">
            <h1 className="display">About Me</h1>
            <button id="about-read-button" className="read-button" onclick="readPassages(['fig1cap', 'fig1text', 'fig2cap', 'fig2text', 'fig3cap', 'fig3text'])">Listen To Section</button>
        </div>
        <div className="about-inner">
            <div className="about-item">
                <div className="img-caption-container">
                    <img src={Image1}alt="Harris Greenstein" />
                    <figcaption id="fig1cap">
                        <strong>Figure 1:</strong> Harris Greenstein's Headshot<br />
                        Harris Greenstein dressed in a suit with a black, red, and white tie.
                    </figcaption>
                </div>
                <p id="fig1text">Originally from Suffern, NY, I am a Cornell University graduate with a major in Computer Science and a minor in Business for Engineers. I have a keen interest in artificial intelligence, technology, and business. Beyond academics, I was actively involved in the Big Red Marching Band and the Big Red Pep Band during my time at Cornell. As a saxophone player and conductor of the Big Red Pep Band, I immensely enjoyed contributing to the campus's lively music scene.</p>
            </div>
            <div className="about-item">
                <div className="img-caption-container">
                    <img src={Image2} alt="Cornell University Logo"/>
                    <figcaption id="fig2cap">
                        <strong>Figure 2:</strong> Cornell University Seal<br/>
                        The Cornell University seal, featuring the text "Cornell University, Founded A.D. 1865" wrapped between two circles around the university crest.
                    </figcaption>
                </div>
                <p id="fig2text">I graduated in May 2023 with a major in Computer Science from the College of Engineering at Cornell University. Additionally, I secured a minor in Business for Engineers from the Dyson College of Applied Economics and Management. This interdisciplinary education equipped me with expertise in both technology and business, enabling me to craft innovative solutions for real-world challenges.</p>
            </div>
            <div className="about-item">
                <div className="img-caption-container">
                    <img src={Image3} alt="Harris Greenstein conducting"/>
                    <figcaption id="fig3cap">
                        <strong>Figure 3:</strong> Harris at Lynah Rink<br/>
                        Harris Greenstein in Lynah Rink, wearing the official Cornell Pep Band Rugby Shirt and the traditional conductor's hard hat.
                    </figcaption>
                </div>
                <p id="fig3text">Music has always been a pivotal part of my life. At Cornell, I was an active member of the Big Red Marching Band and the Big Red Pep Band. I cherished playing the saxophone and supporting the Big Red at various events. Moreover, I held leadership positions in the band, including the role of conductor for the Big Red Pep Band in 2022. I orchestrated weekly rehearsals and guided the band during various sporting events such as Ice Hockey and Lacrosse.</p>
            </div>
        </div>
        <a href="../assets/Harris_Greenstein_Resume.pdf" className="resume-link" download>
            Download Resume
        </a>
    </section>


<section id="experience" className="section experience-section">
  <div class = "display">
  <h1>Experience</h1>
  <button id="experience-read-button" className="read-button" onclick="readPassages(['experience-item1', 'experience-item1-interior', 'experience-item2', 'experience-item2-interior', 'experience-item3', 'experience-item3-interior'])">Listen To Section</button>
  </div>
  <div className="experience">
    <div className="experience-item" id = 'experience-item1'>
      <img src={Image4} alt="Aspiris It Solutions Logo"/>
      <figcaption>Aspiris</figcaption>
      <div className="company-info">
        <h2></h2>
        <p>New York, NY</p>
      </div>
      <h3>Software Integration and Field Technician Intern</h3>
      <p>Jun 2022 - Aug 2022</p>
      <div className="experience-info" id = 'experience-item1-interior'>
        <ul>
          <li>Provided on-site tech support and repairs on pcs, servers, networking equipment, printers, and software upgrades</li>
          <li>Managed software integration project to consolidate data and generate actionable insights.</li>
          <li>Led trial and testing of Security Information and Event Management dashboard and alert package</li>
        </ul>
      </div>
    </div>
    <div className="experience-item" id = 'experience-item2'>
      <img src={Image5} alt="Catchpoint Logo"/>
      <figcaption>Catchpoint</figcaption>
      <div className="company-info">
        <p>New York, NY</p>
      </div>
      <h3>Product Management Intern</h3>
      <p>Jun 2021 - Aug 2021</p>
      <div className="experience-info" id = 'experience-item2-interior'>
        <ul>
          <li>Researched and planned development of new VoIP and Video Call monitoring feature</li>
          <li>Wrote Press Release and Frequently Asked Questions (PRFAQ) to serve as an outline for product team</li>
          <li>Worked with customer experience team, engineering, marketing, UX, and others to improve customer product fit</li>
        </ul>
      </div>
    </div>
    <div className="experience-item" id = 'experience-item3'>
      <div className="image-container">
        <img src={Image6} alt="The Gifted Child Society Logo" className="left-image"/>
        <img src={Image7} alt="Image 2" className="right-image"/>
        <figcaption>The Gifted Child Society</figcaption>
      </div>
      <div className="company-info">
        <p>Allendale, NJ</p>
      </div>
      <div className="position-wrapper">
        <div className="position-container">
      <div className="position instructor">
        <h3>Instructor</h3>
        <p>Jun 2017 - Jan 2021</p>
      </div>
      <div className="experience-info instructor-info" id = 'experience-item3-interior'> 
        <ul>
          <li>Taught classes for gifted children grades K-8 during the summer</li>
          <li>Created original curricula in Python, Java, 3D Modeling, Stock Market, Chess, and Rubik's Cube solving</li>
          <li>Adapted curricula for online learning environment during pandemic</li>
        </ul>
      </div>
    </div>
    <div className="position-container">
      <div className="position head-counselor">
        <h3>Head Counselor</h3>
        <p>Jan 2019 - Jan 2021</p>
      </div>
      <div className="experience-info head-counselor-info">
        <ul>
          <li>Supervised team of counselors, chaperoned and supervised up to 15 gifted and talented children through STEM workshops</li>
          <li>Acted as liaison between supporting counselors and camp directors, directed attendance, and paperwork.</li>
        </ul>
      </div>
    </div>
         <div className="position-placeholder"></div>
      </div>
    </div>
    <div className="experience-info"></div>
    </div>
</section>


    <section id="contact" className="section">
      <div class = "display">
        <h1>Contact</h1>
        <button id="contact-read-button" className="read-button" onclick="readContactForm()">Listen To Section</button>
      </div> 
      <p className="email-text" id = 'email-text'>You can also email me at <a href="mailto:harrisgreenstein@gmail.com">harrisgreenstein@gmail.com</a></p>
      <form className="contact-form" action="https://formspree.io/f/xwkjwdbe" method="post">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <div className="g-recaptcha" data-sitekey="6LedNZIlAAAAAOwZv4xPy42V2Mju_hMlVKbWy_BW"></div>
        <input type="submit" value="Send" />
      </form>
    </section>
    
    
<section id="projects" className="section">
  <div class = "display">
    <h1>Projects</h1>
    <button id="projects-read-button" className="read-button" onclick="readPassages(['project-item1', 'project-item2'])">Listen To Section</button>
  </div>
  <div className="projects-container">
    <div className="projects-inner">
      <div className="project-item">
        <div className="project-item-inner">
          <div className="project-image-wrapper">
            <img src={Image8} alt="Catchpoint logo" className="project-image" />
          </div>
          <div className="project-info" id = 'project-item1'>
            <h2>Zoom, Teams, and VoIP Experience Monitoring At Catchpoint</h2>
            <p>During my internship, I developed a feature for monitoring Zoom, Teams, and VoIP experiences. I employed PRFAQ methodology and worked closely with multiple teams to ensure customer-focused results.</p>
            <p>This feature improves the employee Zoom experiences with holistic performance tracking, preemptive self-service, and proactive outage detection and is available today</p>
            <div className="project-links">
              <a href="https://www.catchpoint.com/workforce-experience/zoom">Learn more about the feature</a>
              <a href="https://www.catchpoint.com/blog/celebrating-the-amazing-work-of-our-2021-interns">Read the blog post</a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-item">
        <div className="project-item-inner">
          <div className="project-image-wrapper">
            <img src={Image9} alt="Project image" className="project-image" />
          </div>
          <div className="project-info" id = 'project-item2'>
            <h2>Semantle: A Reinforcement Learning Solution</h2>
            <p>In our CS 4701: Practicum in Artificial Intelligence project, we developed a reinforcement learning solution to solve the game Semantle. The game presents a target word, and our AI agent iteratively generates guess words to determine the similarity to the target word.</p>
            <p>Our project is ongoing and available on GitHub. Feel free to explore the repository and track our progress</p>
            <div className="project-links">
              <a href="https://github.coecis.cornell.edu/sak299/ai-semantle">View the GitHub Repository</a>
              <a href="semantle_report.html">View The Final Report</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="coursework" id="coursework">
  <div className="coursework-wrapper">
  <div class = "display">
  <h1 className="display">Relevant Coursework</h1>
  <h3>Click on the box to be taken for examples of work in each class </h3> 
   <button id="coursework-read-button" class = "read-button" onclick="readPassages(['coursework-fig4cap', 'coursework-fig4text1', 'coursework-fig4text2', 'coursework-fig5cap', 'coursework-fig5text'])">Listen To Section</button>
  </div> 
  <div className="course-container">
    <div className="course-item" data-url="course1.html">
      <div className="course-header">CS 4450: Introduction to Computer Networks</div>
      <div className="project-title">Measuring Starlink Latency with RIPE Atlas</div>
      <div className="project-title-2">Click For The Presentation</div>
      <div className="course-content">
    <img src={Image10} alt="Starlink satellites" className="course-image" />
    <figcaption id = 'coursework-fig4cap'>
          <strong>Figure 4:</strong> Starlink Satellites in Orbit<br />
          Hundreds of Starlink satellites in orbit above North and South America are able to provide internet access to the most remote areas of the globe
    </figcaption>
    <p id = 'coursework-fig4text1'>This project involved measuring the latency of Starlink user terminals using the RIPE Atlas measurement platform. We conducted network measurements to analyze the performance of the Starlink network, comparing the latency profiles of different user terminals. By performing ping and traceroute measurements, we characterized the round-trip time and network paths between Starlink terminals and selected Internet destinations.</p>
    <p id = 'coursework-fig4text2'>Through this project, I developed a deeper understanding of network performance measurements, working with the RIPE Atlas platform and its API, and interpreting the results to draw conclusions about the Starlink network's performance. I also learned about the architecture and functioning of the Starlink network, including low-earth orbit satellites, user terminals, and ground stations.</p>
      </div>
    </div> 
  </div>

<div className="course-item" data-url="course2.html">
  <div className="course-header">CS 3440: Consumer Behavior</div>
  <div className="project-title">Exploring Consumer Decision-Making and the Impact of Technology</div>
  <div className="project-title-2">Click For The Presentation</div>
  <div className="course-content">
    <img src={Image11} alt="Consumer Behavior" className="course-image" />
    <figcaption id ='coursework-fig5cap'>
          <strong>Figure 5:</strong> The Stages of Consumer Purchasing<br />
          The four main stages of consumer behavior are listed in order, sometimes displayed as a funnel these are: Awareness, Consideration, Purchase, and Service & Loyalty
    </figcaption>
    <div id = 'coursework-fig5text'>
    <p>Throughout the course, CS 3440: Consumer Behavior, we explored various aspects of consumer psychology and decision-making. We analyzed multiple case studies and conducted our own research projects to deepen our understanding of consumer behavior. The course featured the following key projects:</p>
    <ul>
      <li><strong>Project 1: The Fall of Sears - A Comprehensive Analysis:</strong> This project explored the reasons behind the decline of the retail giant Sears, focusing on factors such as organizational culture, competition, and changing consumer preferences.</li>
      <li><strong>Project 2: The Identifiable Service Provider Effect:</strong> This project examined the role of guilt in predicting happiness and intentions to make time-saving purchases, focusing on the Identifiable Victim Effect (IVE).</li>
      <li><strong>Project 3: Consumers and Artificial Intelligence - An Experiential Perspective:</strong> We investigated how consumers perceive and interact with AI-driven technologies, focusing on the experiential aspect of AI in influencing consumer behavior and decision-making.</li>
    </ul>
    <p>Through these projects, we developed a comprehensive understanding of the factors influencing consumer behavior, including emotions, technology, and external events. We also learned various research methodologies and data analysis techniques to better evaluate consumer decision-making processes.</p>
  </div> 
  </div>
  <div className="image-credit">Image Source: Elon Musk, Flickr (CC BY-NC 2.0)</div>
</div>
</div>
</div>
</div>
</>
    );
}
export default ArchiveWebsite;
