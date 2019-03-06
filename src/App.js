import React, { Component } from 'react';
import './styles/App.css';
import { Container, Button, Grid, Header, Icon, Image, Menu, Responsive } from 'semantic-ui-react';
import SideBar from './components/SideBar';
import mass_moca from './images/mass_moca_square.png';

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
                            {/* <Grid.Row>
                                <Button basic className="header-buttons">About Me</Button> 
                                <Button basic className="header-buttons">Work Experience</Button> 
                                <Button basic className="header-buttons">Volunteer Experience</Button> 
                                <Button basic className="header-buttons">Resume</Button> 
                            </Grid.Row> */}
                            <Grid.Row>
                                <Container className="info-container" textAlign='left' fluid>
                                <Responsive as={Image} src={mass_moca} size='medium' centered circular maxWidth={767}/>
                                <Responsive as={Image} src={mass_moca} size='medium' floated='right' circular minWidth={768}/>
                                    <Header as='h1'>Hello there! I'm Asha – a developer and aspiring designer based in Boston.</Header>
                                    <br/>
                                    <p>Currently, I work as a Software Developer at Liberty Mutual in their 
                                        Global Finance Technology group. I have significant full-stack experience in FinTech. I graduated 
                                        from the University of Pittsburgh's School of Computing and Information in May 2016.
                                    </p>
                                    <p>Within Liberty, I am a graduate of their TechStart Development Program, where I completed various
                                        rotations within different IT teams during my first year. I am also an active member
                                        in their LEGIT program – traveling to local high schools (including Charlestown High School in Boston)
                                        to expose young students to technology careers and increase their enthusiasm for coding. Most recently, 
                                        I was nominated and sponsored by Liberty Mutual to particpate in The Partnership Inc's Early Career 
                                        Associates Leadership Development Program for their 2019 class.
                                    </p>
                                    <p>Outside of work, I am the Events and Volunteer Lead for the Boston chapter of Black Girls Code.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio odio, laoreet quis 
                                        laoreet non, gravida et risus. Suspendisse consectetur dignissim nibh sit amet 
                                        faucibus. Duis et ligula massa. Proin at justo id ante euismod vestibulum quis sit amet 
                                        mi. Etiam auctor bibendum quam id tempor. Aenean eleifend arcu in consequat aliquet. 
                                        Fusce dignissim mollis aliquam. Nulla facilisi. Sed eget urna neque. Proin at fringilla 
                                        orci, ut sagittis ex. Curabitur vitae rhoncus sapien. Suspendisse egestas erat id sem 
                                        rhoncus, et sollicitudin lorem fermentum. Quisque faucibus venenatis vulputate.
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
