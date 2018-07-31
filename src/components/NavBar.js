import React, { Component } from 'react';
import { Menu, Header } from 'semantic-ui-react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <Menu secondary className="navi">
            <Menu.Header className="nav-header">Asha Wilson</Menu.Header>
            <Menu.Menu className="nav-items" position="right">
                <Menu.Item>About Me</Menu.Item>
                <Menu.Item disabled>Resume</Menu.Item>
                <Menu.Item disabled>Contact</Menu.Item>
            </Menu.Menu>
        </Menu>
      );
    }
}

export default NavBar;
