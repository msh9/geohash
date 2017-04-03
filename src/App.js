import React, {Component} from 'react';
import logo from './logo.svg';
import GeoTabs from './GeoTabs';
import styles from './App.css';

class App extends Component {
    render() {
        return (
            <div className={ styles.app }>
                <div className={ styles.header }>
                    <img src={logo} className={ styles.logo } alt="logo"/>
                    <h2>Geohashes and more</h2>
                </div>
                <p className={ styles.intro }>
                    <GeoTabs/>
                </p>
            </div>
        );
    }
}

export default App;
