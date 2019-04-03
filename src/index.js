import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
