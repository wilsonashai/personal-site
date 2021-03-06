import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import paris_img from './../images/paris_square.jpg';

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
                    <div className="subheader">a software engineer and designer based in Boston.</div>
                </div>
                <br/>
                <div className="about-container">
                    <div className="about-text">
                        <p className="blurb">Currently, I work as a Software Engineer at Liberty Mutual in their Digital Sales
                        group supporting the US renters and auto quoting experiences. I joined Liberty after graduating from the University of Pittsburgh's 
                        School of Computing and Information in May 2016 with a BS in Information Science.
                        {/* <p className="blurb">Recently, 
                            I was nominated and sponsored by Liberty Mutual to participate in The Partnership Inc's <a className="info-link" href=
                            "https://www.thepartnershipinc.org/services/leadership-development/" target="_blank" rel="noopener noreferrer">
                            Associates Leadership Development Program</a> for their 2019 class.
                        </p> */}
                        <br/>
                        <br/>
                        Outside of work, I am the Events and Volunteer Lead for the Boston chapter of <a className="info-link" href="http://www.blackgirlscode.com/" 
                        target="_blank" rel="noopener noreferrer">Black Girls Code</a> and serve as a mentor for <a className="info-link" href="https://hackdiversity.com/" 
                        target="_blank" rel="noopener noreferrer">Hack.Diversity</a>. Besides technology and design, some of my other interests include keeping up with the 
                        NBA, trying out new nail art designs, and reading a good deal of books.
                        </p>
                    </div>
                    <div className="about-image">
                        <Image src={paris_img} fluid circular/>
                    </div>
                </div>
            </Container>
        );
    }
}

export default About;