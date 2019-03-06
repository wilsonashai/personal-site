import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="side-bar-container">
                <div className="top-header">
                    <h1 className="name-header">Asha Wilson</h1>
                    <p className="subheader">Design. Code. Teach.</p>
                </div>
                <div className="bottom-header">
                    <Grid columns={3}>
                        <Grid.Row className="sidebar-links">
                            <a href="mailto:wilson.ashai@gmail.com"><Icon size="large" name="mail"/> wilson.ashai@gmail.com</a>
                        </Grid.Row>
                        <Grid.Row className="sidebar-links">
                            <a href="https://github.com/wilsonashai" target="_blank"><Icon size="large" name="github"/> github/wilsonashai</a>
                        </Grid.Row>
                        <Grid.Row className="sidebar-links">
                            <a href="https://www.linkedin.com/in/asha-i-wilson/" target="_blank"><Icon size="large" name="linkedin"/> Asha Wilson</a>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default SideBar;