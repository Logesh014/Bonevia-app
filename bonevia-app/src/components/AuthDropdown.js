// src/components/AuthDropdown.js

import React from 'react';
import { Link } from 'react-router-dom';

const AuthDropdown = () => {
    return (
        <div className="profile-dropdown">
            <ul className="dropdown-menu auth-menu">
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign up</Link>
                </li>
            </ul>
        </div>
    );
};

export default AuthDropdown;