import React, { Component } from 'react';
import './style.css';

class Content extends Component {
    render() {
        return (
            <div>
                <main>
                    <h1>Hello, my dear friend. <br /> Welcome to my website!</h1>
                    <p>Some facts</p>
                    <div className="facts">
                        <p>You need to log in to view your profile</p>
                    </div>
                    <div className="facts">
                        <p>"Profile" contains information about you and your interests.</p>
                    </div>
                    <div className="facts">
                        <p>The "Info" section contains interesting facts</p>
                    </div>
                </main>

                <footer>
                    <div className="footer-blocks">
                        <div className="footer-block1">
                            <ul className="footer-information">
                                <li>About us</li>
                                <li>Contact</li>
                                <li>Careers</li>
                                <li>Events</li>
                                <li>Press</li>
                                <li>Press</li>
                            </ul>
                        </div>
                        <div className="footer-block2">
                            <h2>Stay in the know</h2>
                            <ul className="footer-social">
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Telegram</li>
                            </ul>
                        </div>
                    </div>
                    <span>Wish you luck.</span>
                </footer>
            </div>
        );
    }
}

export default Content;