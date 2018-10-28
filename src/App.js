import React, { Component } from 'react';
import './styles/App.css';
import { Grid } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <NavBar/> */}
                <div className="Content">
                    <Grid columns={16}>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <SideBar/>
                            </Grid.Column>
                            <Grid.Column width={12}/>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
