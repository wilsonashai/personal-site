import React, { Component } from 'react';
import './styles/App.css';
import { Grid } from 'semantic-ui-react';
import NavBar from './components/NavBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <Grid>
                    <Grid.Row>
                        <p className="App-intro">Endless possibilities await...</p>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default App;
