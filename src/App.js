import React, { Component } from 'react';
import './styles/App.css';
import { Grid, Segment } from 'semantic-ui-react';
import Sidebar from './components/Sidebar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid>
                    <Grid.Column width={4}>
                        <Sidebar/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <header className="App-header">
                            <h1 className="App-title">Asha Wilson</h1>
                        </header>
                        <p className="App-intro">Endless possibilities await...</p>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default App;
