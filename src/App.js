import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//import Home from './Components/Home';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Navigation from './Components/Navigation';
import ClassView from './Components/HomeFiles/ClassView';
import Section from './Components/HomeFiles/Section';
import Roll from './Components/HomeFiles/Roll';

import AdressView from './Components/HomeFiles/ClassViewSub/AdressView';
import HomeTown from './Components/HomeFiles/ClassViewSub/HomeTown';
import './App.css';
import Tabs from './Components/Tabs';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedTab:"class"
    }
  }
  handleTabChange=(item)=>{
    this.setState({
      selectedTab:item
    })
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Navigation />
          <Tabs
            handleTabChange={this.handleTabChange}
            selectedTab={this.state.selectedTab}
          />
          <Switch>
            <Route path="/home" component={()=><Home selectedTab={this.state.selectedTab}/>} exact/>
            <Route path="/contacts" component={Contacts} exact/>
            <Route  path="/home/class" component={ClassView} />
            <Route path="/home/roll" component={Roll} exact/>
            <Route path="/home/section" component={Section} exact/>

          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
