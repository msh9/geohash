import React, {Component} from 'react';
import logo from './logo.svg';
import GeoTabs from './GeoTabs';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Geohashes and more</h2>
                </div>
                <p className="App-intro">
                    <GeoTabs/>
                </p>
            </div>
        );
    }
}

export default App;
