import React, { Component } from 'react';
import './styles/App.css';
import { Container, Button, Grid, Header, Image, Responsive } from 'semantic-ui-react';
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
                {/* <NavBar/> */}
                <div className="Content">
                    <Responsive as={SideBar} minWidth={768}/>
                    {/* Add alternative component for when screen is too small */}
                    <Grid columns={12}>
                        <Grid.Column width={12} className="main-container">
                            {/* <Grid.Row>
                                <Button basic className="header-buttons">About Me</Button> 
                                <Button basic className="header-buttons">Work Experience</Button> 
                                <Button basic className="header-buttons">Volunteer Experience</Button> 
                                <Button basic className="header-buttons">Resume</Button> 
                            </Grid.Row> */}
                            <Grid.Row>
                                <Container className="info-container" textAlign='left'>
                                <Image src={mass_moca} size='medium' floated='right' circular/>
                                    <Header as='h1'>Hello there! I'm Asha – a developer and designer based in Boston.</Header>
                                    <p>Currently, I work as a Software Developer at Liberty Mutual in their 
                                        Global Finance Technology group. I graduated from the University of Pittsburgh's
                                        School of Computing and Information in May 2016.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio odio, laoreet quis 
                                        laoreet non, gravida et risus. Suspendisse consectetur dignissim nibh sit amet 
                                        faucibus. Duis et ligula massa. Proin at justo id ante euismod vestibulum quis sit amet 
                                        mi. Etiam auctor bibendum quam id tempor. Aenean eleifend arcu in consequat aliquet. 
                                        Fusce dignissim mollis aliquam. Nulla facilisi. Sed eget urna neque. Proin at fringilla 
                                        orci, ut sagittis ex. Curabitur vitae rhoncus sapien. Suspendisse egestas erat id sem 
                                        rhoncus, et sollicitudin lorem fermentum. Quisque faucibus venenatis vulputate.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio odio, laoreet quis 
                                    laoreet non, gravida et risus. Suspendisse consectetur dignissim nibh sit amet 
                                    faucibus. Duis et ligula massa. Proin at justo id ante euismod vestibulum quis sit amet 
                                    mi. Etiam auctor bibendum quam id tempor. Aenean eleifend arcu in consequat aliquet. 
                                    Fusce dignissim mollis aliquam. Nulla facilisi. Sed eget urna neque. Proin at fringilla 
                                    orci, ut sagittis ex. Curabitur vitae rhoncus sapien. Suspendisse egestas erat id sem 
                                    rhoncus, et sollicitudin lorem fermentum. Quisque faucibus venenatis vulputate.</p>
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
