import React, { useState } from 'react';
// import { Button } from '../Button/Button';
import { Button } from '../Buttons';

import companyLogo from '../../assets/IPP-LOGO1.png'
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <a href={'/home'}><img className='navbar-logo' src={companyLogo}/></a>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            {/*<Link*/}
            {/*  to='/sign-up'*/}
            {/*  className='nav-links-mobile'*/}
            {/*  onClick={closeMobileMenu}*/}
            {/*>*/}
            {/*  Account*/}
            {/*</Link>*/}
            <a href="https://impactpestpros.pestportals.com/landing/index" target="_blank" className="nav-links-mobile">Account</a>

          </li>
        </ul>
        {/*<Button />*/}
        <Button onClick={() => window.open( "https://impactpestpros.pestportals.com/landing/index")} >Account</Button>

      </nav>
    </>
  );
}

export default Navbar;
