import React, { Component } from 'react';
import './App.css';
import Dashboard from './Views/Dashboard/Dashboard';
import Login from './Views/Login/Login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserDetails } from './User/Action/ActionUserDetails';
import { withRouter } from 'react-router-dom';
import ReduxState  from './Reducer';

import {userDetailsType} from './User/Type/Types';
import {wholeState} from './Reducer';
import { RouteComponentProps } from "react-router-dom";
import Axios from "axios";

interface StateProps {
  userDetails: wholeState
}
     
interface DispatchProps {
  getUserDetails: (userId:string,passWord:string) => void
}

type Props = StateProps & DispatchProps;
class App extends Component<RouteComponentProps<any>,Props,any> {
  handleLoginSubmit = (userId : string, passWord : string) => {
    try {
     
      Axios.defaults.headers.common["SM_USER"] = userId;
      this.props.getUserDetails(userId, passWord);
      sessionStorage.setItem("userid", userId);
    } catch {
      alert("Not Authorized");
    }
  }
  render() {
    let view : any;
    console.log('next props 2222',this.props,this.props);
    if (1) {
      //console.log('next props 2222',this.props);
      view = <Login handleLoginSubmit={this.handleLoginSubmit}/>
    }
    else {
      view = <Dashboard />;
    }
    return (
      <div className="App" ref="app">
        {/*this.props.userDetails["isLoading"] ? <Loader /> : <div></div>*/}
        {view}
      </div>
    );
  }
}

function mapStateToProps(state : any) {
  console.log('state 111', state);
  return {
    userDetails : state.userDetails
  };
}
function mapDispatchToProps(dispatch :any) {
  return bindActionCreators({ getUserDetails}, dispatch);
}

export default withRouter(connect<StateProps, DispatchProps>(mapStateToProps , mapDispatchToProps )(App));

