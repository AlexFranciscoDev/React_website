import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    /**
     * handleClick
     * 
     * Open/close the nav menu
     */
    const handleClick = () => {
        setClick(!click);
    }

    /**
     * closeMobileMenu
     * 
     * If the mobile menu has been opened we set it to false to hide it.
     * This will be triggered everytime we click on a link from the menu.
     */
    const closeMobileMenu = () => {
        setClick(false);
    }

    /**
     * showButton
     * 
     * Check if the window size is for mobile. If so, it wont show the SIGN
     * UP button. Otherwise it will.
     */
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    /* Renders it one time and is not going to show up anymore */
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <div>
          <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo" onClick={ closeMobileMenu }>
                    YEKW <i class="fasfa-guitar-electric"></i>
                </Link>
                {/* Icon toggle for the navbar for mobile and version */}
                <div className="menu-icon" onClick={ handleClick }>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                {/* Display phone navbar*/}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        {/* Close mobile menu */}
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                { button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
            </div>
          </nav>
          
        </div>
    )
}

export default Navbar
