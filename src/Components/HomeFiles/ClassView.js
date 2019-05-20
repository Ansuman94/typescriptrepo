import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import AdressView from './ClassViewSub/AdressView';
import HomeTown from './ClassViewSub/HomeTown';
import Navigation from './ClassViewSub/Navigation';

class ClassView extends Component {
  render() {
    return (
      <div className="App">
        ClassView
        <Navigation/>
        <Route path="/home/class/address" component={AdressView} />
        <Route path="/home/class/homeTown" component={HomeTown}/>
      </div>
    );
  }
}

export default ClassView;
