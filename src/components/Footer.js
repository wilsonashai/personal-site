import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="footer">
                <p className="inline-block copywrite">© 2019 Asha Wilson</p>
                <div className="inline-block icon-group">
                    <a href="mailto:wilson.ashai@gmail.com"><Icon size="large"  name="mail"/></a>
                    <a href="https://github.com/wilsonashai" target="_blank" rel="noopener noreferrer"><Icon size="large" name="github"/></a>
                    <a href="https://www.linkedin.com/in/asha-i-wilson/" target="_blank" rel="noopener noreferrer"><Icon size="large" name="linkedin"/></a>
                </div>
            </div>
        );
    }
}

export default Footer;