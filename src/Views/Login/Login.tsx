import React, { useState } from 'react';

interface props{
  handleLoginSubmit: (userId:string,passWord:string) => void
}
const Login: React.SFC<props> =(props)=> {
  // Declare a new state variable, which we'll call "count"
  

  return (
    <div onClick={()=>props.handleLoginSubmit("manogna","b")}>
      Login
    </div>
  );
}
export default Login;