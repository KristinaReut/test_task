import React, { Component } from 'react';
import './style.css'

class MainContent extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="item">
                    <h2 className="item-name">
                        McDonald’s once made bubblegum-flavored broccoli &#8595;
                    </h2>
                    <div className="hide">
                        <p className="text">
                            This interesting fact will have your taste buds crawling.
                            Unsurprisingly, the attempt to get kids to eat healthier
                            didn’t go over well with the child testers, who were
                            “confused by the taste.”
                        </p>
                    </div>
                </div>
                <div className="item">
                    <h2 className="item-name">
                        Some fungi create zombies, then control their minds &#8595;
                    </h2>
                    <div className="hide">
                        <p className="text">
                            The tropical fungus Ophiocordyceps infects ants’ central
                            nervous systems. By the time the fungi been in the insect
                            bodies for nine days, they have complete control over the
                            host’s movements. They force the ants to climb trees, then c
                            onvulse and fall into the cool, moist soil below, where fungi
                            thrive. Once there, the fungus waits until exactly solar noon
                            to force the ant to bite a leaf and kill it.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <h2 className="item-name">
                        The first oranges weren’t orange &#8595;
                    </h2>
                    <div className="hide">
                        <p className="text">
                            The original oranges from Southeast Asia were a tangerine-pomelo
                            hybrid, and they were actually green. In fact, oranges in warmer
                            regions like Vietnam and Thailand still stay green through maturity.
                        </p>
                    </div>
                </div>
            </div >
        );
    }
}

export default MainContent;