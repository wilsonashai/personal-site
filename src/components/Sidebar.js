import React, { Component } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
          <Segment className="height-100 background-grey">
            <Header as="h1">Asha Wilson</Header>
          </Segment>
      );
    }
}

export default Sidebar;
