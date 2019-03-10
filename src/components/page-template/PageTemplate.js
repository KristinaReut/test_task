import React, { Component } from 'react';
import MainMenu from './MainMenu';
import './style.css'

class PageTemplate extends Component {
  

    render() {
        const { children } = this.props;
        return (
           <div className="page">
           <MainMenu />
           {children}
           </div>
        );
    }
}

export default PageTemplate;