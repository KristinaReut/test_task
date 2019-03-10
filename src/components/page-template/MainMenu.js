import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Hello from './Hello';
import './style.css';

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}

class MainMenu extends Component {

    render() {
        return (
            <nav className="main-menu">
                <NavLink to="/" className="link">
                    Main Page
                </NavLink>
                <NavLink to="/profile" className="link" activeStyle={selectedStyle}>
                    Profile
                </NavLink>
                <NavLink to="/info" className="link" activeStyle={selectedStyle}>
                    Info
                </NavLink>
                {localStorage['person'] ? <Hello/> : null}
            </nav>
        );
    }
}

export default MainMenu;