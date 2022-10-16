import React from 'react'
// import { NavLink } from 'react-router-dom';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from'./NavbarElements';

const Navbar = () => {
  return (
   <>
        <Nav>
            <NavLink to="/">
                <h1>Motor Page</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    Battery Page
                </NavLink>
                {/* <NavLink to="/services" activeStyle>
                    Sea Transport
                </NavLink> */}
                {/* <NavLink to="/contact-us" activeStyle>
                    Contact
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                    Sign Up
                </NavLink> */}
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
   </>
  )
}

export default Navbar;