import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom';

const Navigation=()=>{
  return(
    <div>
      <Link to="/home/class/address">Address</Link>
      <Link to="/home/class/homeTown">HomeTown</Link>
    </div>
  )
}
export default Navigation;
