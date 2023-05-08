import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <nav className='bg-secondary'>
        <ul className='d-flex justify-content-evenly align-content-center list-unstyled'>
          {/* <li><NavLink to={'/'}>Home</NavLink></li> */}
          <li><NavLink to={'/Search'}>Search</NavLink></li>
          {/* <li><NavLink to={'/About'}>About</NavLink></li>
          <li><NavLink to={'/Contact'}>Contact</NavLink></li> */}
        </ul>
      </nav>
    </>
  )
}

export default Nav;
