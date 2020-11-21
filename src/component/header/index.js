import React from 'react';
import './header.scss'
import logo from '../../assets/logo.png';

const Header = props => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
            <div className="logo">
<img data-test="logoIMG" src={logo} alt="logo" />
            </div>
            </div>
            Header
        </header>
    )
} ;

export default Header;