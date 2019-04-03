import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import mass_moca from './../images/mass_moca_square.png';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container fluid textAlign='left'>
                <h1 className="title">Hello! I'm Asha Wilson&mdash;<br/>
                a software developer and designer based in Boston.</h1>
                <br/>
                <div className="about-container">
                    <div className="about-text">
                        <p className="blurb">Currently, I work as a Software Developer at Liberty Mutual Insurance in their 
                        Global Finance Technology group. I joined Liberty after graduating from the University of Pittsburgh's School 
                        of Computing and Information in May 2016 with a BS in Information Science.
                        </p>
                        <p className="blurb">At Liberty, I am a graduate of their <a className="info-link" href="https://techcampus.libertymutual.com/#/findYourJob/techProgram#techProgram"
                            target="_blank" rel="noopener noreferrer"> TechStart Development Program</a>, where I completed various
                            rotations within different IT teams during my first year. Recently, 
                            I was nominated and sponsored by Liberty Mutual to participate in The Partnership Inc's <a className="info-link" href=
                            "https://www.thepartnershipinc.org/services/leadership-development/" target="_blank" rel="noopener noreferrer">
                            Associates Leadership Development Program</a> for their 2019 class.
                        </p>
                        <p className="blurb">Outside of work, I am the Events and Volunteer Lead for the Boston chapter of <a className="info-link" href="http://www.blackgirlscode.com/" 
                            target="_blank" rel="noopener noreferrer">Black Girls Code</a>, where I help plan monthly weekend workshops and enrichment 
                            activities to introduce young minority girls to coding. Besides technology and design, some of my other interests 
                            include keeping up with the NBA, trying out new recipes, and reading lots of books (find me on <a className="info-link" href="https://www.goodreads.com/eightqueens" 
                            target="_blank" rel="noopener noreferrer">Goodreads</a>).
                        </p>
                    </div>
                    <div className="about-image">
                        <Image src={mass_moca} fluid circular/>
                    </div>
                </div>
            </Container>
        );
    }
}

export default About;