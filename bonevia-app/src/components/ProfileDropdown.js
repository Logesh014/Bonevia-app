// src/components/ProfileDropdown.js

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { useAuth } from '../context/AuthContext';

const ProfileDropdown = ({ user }) => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogoutClick = () => {
        logout();
        navigate('/');
    };

    // The function below applies the 'dropdown-item' class, and 'active' if needed
    const getNavLinkClass = ({ isActive }) => {
        return isActive ? 'dropdown-item active' : 'dropdown-item';
    };

    return (
        <div className="profile-dropdown">
            <div className="user-info">
                <CgProfile className="profile-icon-large" />
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
            <ul className="dropdown-menu">
                <li>
                    <NavLink to="/profile" className={getNavLinkClass}>
                        <CgProfile className="menu-icon" />
                        My Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/orders" className={getNavLinkClass}>
                        <AiOutlineCreditCard className="menu-icon" />
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={getNavLinkClass}>
                        <IoSettingsOutline className="menu-icon" />
                        Settings
                    </NavLink>
                </li>
                <hr />
                <li>
                    <button onClick={handleLogoutClick} className="logout-btn">
                        <RiLogoutBoxRLine className="menu-icon" />
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ProfileDropdown;