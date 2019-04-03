import React, { Component } from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
    constructor(){
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <div id="page-container">
                    <NavBar/>
                    <div className="Content">
                        {/* <NavBar/> */}
                        <About/>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
