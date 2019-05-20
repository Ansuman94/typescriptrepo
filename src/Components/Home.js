import React, { Component } from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import Tabs from './Tabs';
import ClassView from './HomeFiles/ClassView';
import Roll from './HomeFiles/Roll';
import Section from './HomeFiles/Section';
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      isFlag:false
    }
  }
  render() {
      //return <Redirect to={`./${this.props.selectedTab}`}/>
      return(<div className="App">
        <Route path="/home" component={ClassView} />
      </div>);

  }
}

export default Home;
