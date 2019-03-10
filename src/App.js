import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Authorization from './components/authorization/Authorization';
import Profile from './components/profile/Profile';
import Whoops404 from './components/whoops/Whoops404';
import Information from './components/information/Information';
import './index.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Authorization} />
            <Route path='/profile' component={Profile} />
            <Route path='/info' component={Information} />
            <Route component={Whoops404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
