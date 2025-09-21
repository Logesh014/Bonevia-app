// src/components/ProfileDropdown.js

import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { AiOutlineCreditCard } from 'react-icons/ai'; // Example: Add an icon for Payment

const ProfileDropdown = ({ user }) => {
    return (
        <div className="profile-dropdown">
            <div className="user-info">
                <CgProfile className="profile-icon-large" />
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
            <ul className="dropdown-menu">
                <li>
                    <Link to="/profile">
                        <CgProfile className="menu-icon" />
                        My Profile
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <AiOutlineCreditCard className="menu-icon" />
                        My Orders
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <IoSettingsOutline className="menu-icon" />
                        Settings
                    </Link>
                </li>
                <hr />
                <li>
                    <Link to="/logout">
                        <RiLogoutBoxRLine className="menu-icon" />
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default ProfileDropdown;