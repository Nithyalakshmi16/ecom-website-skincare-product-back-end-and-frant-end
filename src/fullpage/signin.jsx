import React from 'react';
import './signin.css';
const Sign =()=>{
  return (
    <div className='login-container'>

    <form action="/login" method="post">
     <div className='feild'>
    <input type="text" placeholder='Username' name="username" required></input>
    </div>

<div className='feild'>
<input type="password" placeholder='Password'  name="password" required></input>
</div>


    <button type="LOGIN">Login</button>
    
    <div className='link'>
Not  a remember!!
<a href='#'>Signup</a>
    </div>
    
  </form>
  </div>
  )
}
  export default Sign;
