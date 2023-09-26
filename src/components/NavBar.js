import React, { Component } from 'react';
import { Image, Menu } from 'semantic-ui-react';
import resume from '../documents/Asha-Wilson-Frontend-Engineer-Resume.pdf';
import logo from '../images/personal_logo.svg';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <Menu secondary className="nav-bar">
            <Menu.Header className="logo">
                <a href="/"><Image size='tiny' src={logo}/></a>
            </Menu.Header>
            <Menu.Menu className="nav-items" position="right">
                <Menu.Item href="/">About</Menu.Item>
                <Menu.Item disabled title="Coming soon!">Work</Menu.Item>
                <Menu.Item href={resume} target="_blank" rel="noopener noreferrer">Resumé</Menu.Item>
            </Menu.Menu>
        </Menu>
      );
    }
}

export default NavBar;
