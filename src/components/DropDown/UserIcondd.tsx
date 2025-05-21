import React, { useEffect, useState } from 'react';
import './UserIcondd.css';
import imgProfile from '../../assets/images/sia croven.jpg';
import fallbackImg from '../../assets/images/no_user2.png';
import { useNavigate } from "react-router-dom";

const UserIconDropdown: React.FC<{ onClose: () => void; onLogout: () => void }> = ({ onClose, onLogout }) => {
    const [isHiding, setIsHiding] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        setIsHiding(true);
        setTimeout(() => { onClose(); }, 300);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const dropdown = document.querySelector('.dropdown-menu');
            if (dropdown && !dropdown.contains(event.target as Node)) {
                handleClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`dropdown-menu ${isHiding ? 'fade-out' : 'fade-in'}`}>
            <div className="user-profile">
                <img
                    src={imgProfile}
                    alt="preview"
                    className="profile-image"
                    onError={(e) => { e.currentTarget.src = fallbackImg; }}
                />
                <p className="dropdown-toggle">sia croven</p>
            </div>

            <div className="dropdown-section">
                <button
                    className="dropdown-item"
                    onClick={() => {
                        navigate("/userAccount");
                        onClose();
                    }}
                >
                    <span className="dropdown-icon gray-icon"><img src="src/assets/images/user.png" alt="user" /></span> Your profile
                </button>

                <button className="dropdown-item">
                    <span className="dropdown-icon gray-icon"><img src="src/assets/images/nft icon.png" alt="preview" /></span> Your NFTs
                </button>

                <button className="dropdown-item">
                    <span className="dropdown-icon gray-icon"><img src="src/assets/images/cart .png" alt="shopping cart" /></span> You Bought
                </button>
            </div>

            <div className="dropdown-section">
                <button className="dropdown-item">
                    <span className="gray-icon"><img src="src/assets/images/application.png" alt="preview" /></span> Feature preview
                </button>
            </div>

            <div className="dropdown-section">
                <button className="dropdown-button" onClick={onLogout}>
                    <span className="red-icon"><img src="src/assets/images/sign out option.png" alt="sign out" /></span> Sign out
                </button>
            </div>
        </div>
    );
};

export default UserIconDropdown;
