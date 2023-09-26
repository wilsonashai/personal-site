import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <div id="page-container">
                <NavBar/>
                <div className="Content">
                    <About/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
