import React, { Component } from 'react';
import PageTemplate from '../page-template/PageTemplate';
import ProfileInfo from './ProfileInfo';
import { Redirect } from 'react-router-dom';

class Profile extends Component {

    render() {
        if (!localStorage.getItem('person')) {
            return <Redirect from='/profile' to='/login' />
        }
        return (
            <PageTemplate>
                <div className="profile">
                    <h1>Your profile</h1>
                    <ProfileInfo />
                </div>
            </PageTemplate>
        );
    }
}

export default Profile;