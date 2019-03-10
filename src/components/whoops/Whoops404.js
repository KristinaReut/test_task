import React, { Component } from 'react';

class Whoops404 extends Component {

    render() {
        const { location } = this.props;
        return (
           <div className="whoops-404">
           <h1>Rosourse not found at '{location.pathname}'</h1>
           </div>
        );
    }
}

export default Whoops404;