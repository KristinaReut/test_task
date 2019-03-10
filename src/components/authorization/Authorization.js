import React, { Component } from 'react';
import PageTemplate from '../page-template/PageTemplate';
import FormForAuthorization from './FormForAuthorization';
import './style.css'

class Authorization extends Component {
    render() {
        return (
            <PageTemplate>
                <div className="authorization">
                    <h1>Authorization</h1>
                    <h2>Please, log in</h2>
                    <FormForAuthorization />
                </div>
            </PageTemplate>
        );
    }
}

export default Authorization;