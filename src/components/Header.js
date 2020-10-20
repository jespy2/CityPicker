import React, { Component } from 'react';
import './Header.css';
import logo from '../logo.png';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src={logo} alt="Logo" className="Header-Logo" />
            </div>
        )
    }
};

export default Header;