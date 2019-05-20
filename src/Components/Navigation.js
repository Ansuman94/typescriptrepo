import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const Navigation=()=>{
  return(
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </div>
  )
}
export default Navigation;
