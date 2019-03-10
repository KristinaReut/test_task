import React, { Component } from 'react';
import './style.css'

class ProfileInfo extends Component {
    render() {
        return (
            <div>
                <div className="main-information">
                    <h2>Admin</h2>
                </div>
                <div className="information">
                    <p>
                        <b>Name:</b> Admin
                        <br/>
                        <b>Surname:</b> Admin
                        <br/>
                        <b>Sex:</b> female
                        <br/>
                        <b>Age:</b> 22
                        <br/>
                        <b>Interests:</b> sport, books, music
                    </p>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;