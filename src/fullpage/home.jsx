import React from 'react';
import './home.css';
const Home =()=>{
  return (
<div>
<nav className="navigation-bar">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skin care</a></li>
            <li><a href="#">Hair care</a></li>
            <li><a href="#">Foot care</a></li>
            <li><a href="#">Lip care</a></li>
            <li><a href="#">sign up/sign in</a></li>
        </ul>
    </nav>
    <h1 className='selling'> Top Selling product </h1>
</div>
  )
}
export default Home;