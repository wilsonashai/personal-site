import React, { Component } from 'react';
import './styles/App.css';
import { Grid, Button } from 'semantic-ui-react';
import SideBar from './components/SideBar';

class App extends Component {
    constructor(){
        super();
        this.state = {
            infoSection: "about"
        };

        this.updateSection = this.updateSection.bind(this);
    }

    updateSection(section) {
        switch(section) {
            case "about": return null;
            case "work": return null;
            case "volunteer": return null;
            case "contact": return null;
        }
    }

    render() {
        return (
            <div className="App">
                {/* <NavBar/> */}
                <div className="Content">
                    <Grid columns={16}>
                        <Grid.Row>
                            <Grid.Column className="padding-none" width={3}>
                                <SideBar/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <div className="info-container">
                                    <Grid.Row>
                                        {/* <Button basic className="header-buttons">About Me</Button> 
                                        <Button basic className="header-buttons">Work Experience</Button> 
                                        <Button basic className="header-buttons">Volunteer Experience</Button> 
                                        <Button basic className="header-buttons">Resume</Button>  */}
                                    </Grid.Row>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
