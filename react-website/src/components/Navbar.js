import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    return (
        <div>
          <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    YEKW <i class="fa-thin fa-album"></i>
                </Link>
                <div className="menu-icon">
                    <i className={click ? "fas fa-time" : "fas fa-bars"}></i>
                </div>
            </div>
          </nav>
        </div>
    )
}

export default Navbar
