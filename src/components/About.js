import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import updated_headshot from './../images/cropped_linkedin_headshot.jpeg';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container fluid textAlign='left'>
                <div className="title">
                    <div className="major-header">Hello! I'm Asha Wilson&mdash;</div>
                    <div className="subheader">a software engineer based in Washington DC.</div>
                </div>
                <br/>
                <div className="about-container">
                    <div className="about-text">
                        <p className="blurb">Currently, I work as a Software Engineer II at Micrososft supporting commercial self-service checkout
                        at Microsoft in their Commerce, Platform + Experience group. 
                        <br/>
                        <br/>
                        Previously, I worked at Liberty Mutual in their Digital Sales group supporting the US renters and auto 
                        quoting experiences. I joined Liberty after graduating from the University of Pittsburgh's 
                        School of Computing and Information in May 2016 with a BS in Information Science.
                        <br/>
                        <br/>
                        Outside of work, I served as the Events and Volunteer Lead for the Boston chapter of <a className="info-link" href="http://www.blackgirlscode.com/" 
                        target="_blank" rel="noopener noreferrer">Black Girls Code</a> for 3 years and serve as a mentor for <a className="info-link" href="https://hackdiversity.com/" 
                        target="_blank" rel="noopener noreferrer">Hack.Diversity</a>. Besides technology and design, some of my other interests and hobbies include trying out new nail art designs, 
                        ice skating, traveling and reading lots of books.
                        </p>
                    </div>
                    <div className="about-image">
                        <Image src={updated_headshot} fluid circular/>
                    </div>
                </div>
            </Container>
        );
    }
}

export default About;