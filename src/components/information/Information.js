import React, { Component } from 'react';
import PageTemplate from '../page-template/PageTemplate';
import MainContent from './MainContent';
import './style.css';

class Information extends Component {
    render() {
        return (
            <PageTemplate>
                <div className="info">
                    <h1>Information</h1>
                    <MainContent />
                </div>
            </PageTemplate>
        );
    }
}

export default Information;