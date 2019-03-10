import React, { Component } from 'react';
import './style.css';

class Hello extends Component {

    render() {
        return (
            <span className="welcome-message">Hello, {JSON.parse(localStorage['person']).name}!</span>
        );
    }
}

export default Hello;