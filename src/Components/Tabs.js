import React from 'react';
import {NavLink,Link} from 'react-router-dom';
const tabData=["class","section","roll"];
export default class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tabs: tabData
    }
  }
  render(){
    let tabView=[];
    this.state.tabs.map(item=>{
      if(item===this.props.selectedTab){
        tabView.push(<NavLink className='selected tabCell' onClick={()=>this.props.handleTabChange(item)} to={`/${item}`}>{item}</NavLink>);
      }
      else{
        console.log('1111',`./${item}`);
        tabView.push(<NavLink className='tabCell' onClick={()=>this.props.handleTabChange(item)} to={`/${item}`}>{item}</NavLink>);
      }
    })
    return(
      <div className='tabView'>
        {tabView}
      </div>
    );
  }
}
