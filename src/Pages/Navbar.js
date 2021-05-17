
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

function Navbar({ setCrypto }) {
  const handleInput = (e) => {
    setCrypto(e.target.value)
  }
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const handleClick = () => { setClick(!click) }
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton)



  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
              La Blockchain Pour les Hmars
          </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/home'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/list'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  ListCoin
                </Link>
              </li>
              <li>
                <Form inline>
                  <FormControl onChange={handleInput} type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
