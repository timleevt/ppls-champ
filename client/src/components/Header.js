import React from 'react';
import banner from '../images/banner3.jpeg';
import './Header.css';

const Header = () => {
    return (
        <div className="container content" >
            <div className="banner"><img className="banner-img" src={banner} alt="banner"/></div>
            <div className="center"><h1>THE PEOPLE'S CHAMP</h1></div>
        </div>
    )
}

export default Header;