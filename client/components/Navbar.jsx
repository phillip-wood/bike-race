import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

// import { Button } from './Button';

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            BR <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              {props.activeUser && 
              <Link to='/createEvent' className='nav-links' onClick={closeMobileMenu}>
                Create Event
              </Link>
              }
            </li>
            <li className='nav-item'>
            {props.activeUser && 
              <Link to='/eventsPage' className='nav-links' onClick={closeMobileMenu}>
                Events Page
              </Link>
            }
            </li>
            <li className='nav-item'>
              <Link to='/users/active' className='nav-links' onClick={closeMobileMenu}>
                {props.activeUser && props.activeUser.username}
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

function ms2p(globalState){
  return {
    activeUser: globalState.activeUser
  }
}

export default connect(ms2p)(Navbar)