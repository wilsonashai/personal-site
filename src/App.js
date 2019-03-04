import React, { Component } from 'react';
import './styles/App.css';
import { Container, Button, Grid, Header, Image, Responsive } from 'semantic-ui-react';
import SideBar from './components/SideBar';

class App extends Component {
    constructor(){
        super();

        this.state = {};
    }

    render() {
        const src='./images/mass_moca.jpg';

        return (
            <div className="App">
                {/* <NavBar/> */}
                <div className="Content">
                    <Responsive as={SideBar} minWidth={768}/>
                    {/* Add alternative component for when screen is too small */}
                    <Grid columns={12}>
                        <Grid.Column width={12} className="main-container">
                            <Grid.Row>
                                <Button basic className="header-buttons">About Me</Button> 
                                <Button basic className="header-buttons">Work Experience</Button> 
                                <Button basic className="header-buttons">Volunteer Experience</Button> 
                                <Button basic className="header-buttons">Resume</Button> 
                            </Grid.Row>
                            <Grid.Row>
                                <Container className="info-container" textAlign='left'>
                                    <Header as='h2'>Hello! I am Asha Wilson, a developer/designer based in Boston.</Header>
                                    <img src={src} size='large' floated='left'/>
                                    <p>Currently, I work as a Software Developer at Liberty Mutual Insurance in their 
                                        Global Finance Technology group. I graduated from the University of Pittsburgh's
                                        School of Computing and Information in May 2016. 
                                    
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
