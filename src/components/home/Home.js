import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Content from './Content';
import './style.css';

class Home extends Component {
    state = {
        person: 'person',
    }

    handleClick() {
        localStorage.removeItem('person');
        this.setState({
            person: null
        })
    }
    
    render() {
        return (
            <div className="home">
                <nav className="main-menu">
                    <Link className="link" to="profile">Profile</Link>
                    <Link className="link" to="info">Info</Link>
                    {localStorage['person'] ? <button onClick={() => this.handleClick()}>Sign Out</button> : null}
                </nav>
                <Content />
            </div>
        );
    }
}

export default Home;