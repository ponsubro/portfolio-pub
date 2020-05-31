import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './Header.css';
import { NavLink } from 'react-router-dom'
import logo from './img/logof.png';

class Header extends Component {
    render() {
        return (
            <div className="headerArea" >
                <div className="headerCenter">
                    <Link to='/'><div className="logo menuStyle"><img src={logo} /></div></Link>
                    <div className="menu menuFont">
                        <NavLink to='/me' className='menuStyle'><div className="contents">me</div></NavLink>
                        <NavLink to='/works' className='menuStyle'><div className="contents">works</div></NavLink>
                        <NavLink to='/contact' className='menuStyle'><div className="contents">contact</div></NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;