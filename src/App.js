import React, { Component } from 'react';
import './styles/App.css';
import { Container, Grid, Header, Icon, Image, Menu, Responsive } from 'semantic-ui-react';
import SideBar from './components/SideBar';
import mass_moca from './images/mass_moca_square.png';
import resume from './documents/Asha_Wilson_Resume.pdf';

class App extends Component {
    constructor(){
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <div className="Content">
                    <Responsive as={SideBar} minWidth={768}/>
                    <Responsive maxWidth={767}>
                        <Menu className="mobile-menu" secondary pointing fixed='top'>
                            <Menu.Header className="menu-header">Asha Wilson</Menu.Header>
                            <Menu.Menu position='right'>
                                <Menu.Item className='menu-icon' name="email">
                                    <a href="mailto:wilson.ashai@gmail.com"><Icon size="large" name="mail"/></a>
                                </Menu.Item>
                                <Menu.Item className='menu-icon'>
                                    <a href="https://www.linkedin.com/in/asha-i-wilson/" target="_blank" rel="noopener noreferrer"><Icon size="large" name="linkedin"/></a>
                                </Menu.Item>
                                <Menu.Item className='menu-icon'>
                                    <a href="https://github.com/wilsonashai" target="_blank" rel="noopener noreferrer"><Icon size="large" name="github"/></a>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </Responsive>
                    <Grid columns={10}>
                        <Grid.Column width={16} className="main-container">
                            <Grid.Row>
                                <Container className="info-container" textAlign='left' fluid>
                                <Responsive as={Image} src={mass_moca} size='medium' centered circular maxWidth={767}/>
                                    <Header className="title" as='h1'>Hello there! I'm Asha – a developer and aspiring designer based in Boston.</Header>
                                    <Responsive as={Image} className="padding-top-10px" src={mass_moca} size='medium' floated='right' circular minWidth={768}/>
                                    <br/>
                                    <p>Currently, I work as a Software Developer at Liberty Mutual in their 
                                        Global Finance Technology group. I have significant full-stack experience in FinTech – developing
                                        and supporting Treasury, Reinsurance, and Accounting applications used globally by our customers. 
                                        I graduated from the University of Pittsburgh's School of Computing and Information in May 2016 
                                        with a BS in Information Science.
                                    </p>
                                    <p>At Liberty, I am a graduate of their <a className="info-link" href="https://techcampus.libertymutual.com/#/findYourJob/techProgram#techProgram"
                                        target="_blank" rel="noopener noreferrer"> TechStart Development Program</a>, where I completed various
                                        rotations within different IT teams during my first year. I am also an active member
                                        in their LEGIT program – traveling to local high schools (including Charlestown High School in Boston)
                                        to expose young students to technology careers and increase their enthusiasm about coding. Most recently, 
                                        I was nominated and sponsored by Liberty Mutual to participate in The Partnership Inc's <a className="info-link" href=
                                        "https://www.thepartnershipinc.org/services/leadership-development/" target="_blank" rel="noopener noreferrer">
                                        Associates Leadership Development Program</a> for their 2019 class.
                                    </p>
                                    <p>Outside of work, I am the Events and Volunteer Lead for the Boston chapter of <a className="info-link" href="http://www.blackgirlscode.com/" 
                                        target="_blank" rel="noopener noreferrer">Black Girls Code</a>, where I help plan weekend workshops and enrichment 
                                        activities to introduce young minority girls to coding. Besides technology and design, some of my other interests 
                                        include keeping up with the NBA, reading lots of books (find me on <a className="info-link" href="https://www.goodreads.com/eightqueens" 
                                        target="_blank" rel="noopener noreferrer">Goodreads</a>), and traveling to new cities and countries.
                                        <br/>
                                        <br/>
                                        <Responsive maxWidth={767}>
                                            To view my resume, click <a className="info-link" href={resume} target="_self">here</a>.
                                        </Responsive>
                                    </p>
                                </Container>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
