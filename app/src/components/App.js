import React from 'react';
import { Link } from 'react-router';
import logo from '../img/logo.svg';
import './App.css';

const App = React.createClass({
    
    cordovaEvents: {

        initialize: function() {
            alert('init!');
            this.bindEvents();
        },

        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
            document.addEventListener('offline', this.onOffline, false);
            document.addEventListener('online', this.onOnline, false);
        },

        onDeviceReady: function() {
            alert('Device Ready!');
            //codePush.sync();
        },
        
        onOffline: function() {
            alert('Offline!');
            console.log(navigator.connection);
        },
        
        onOnline: function() {
            alert('Online!');
            console.log(navigator.connection);
        }
        
    },
    
    componentWillMount: function() {
        if (window.cordova) { 
            this.cordovaEvents.initialize();
        }
    },
    
    render: function() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
  
});

export default App;
