import React, { useEffect, useState } from 'react';
import styles from './UserIcondd.module.css';
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
            const dropdown = document.querySelector('.dropdown_menu');
            if (dropdown && !dropdown.contains(event.target as Node)) {
                handleClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`${styles.dropdown_menu} ${isHiding ? styles.fade_out : styles.fade_in}`}>
            <div className={styles.user_profile}>
                <img src={imgProfile} alt="preview" className={styles.profile_image} onError={(e) => { e.currentTarget.src = fallbackImg; }}/>
                <p className={styles.dropdown_toggle}>sia croven</p>
            </div>

            <div className={styles.dropdown_section}>
                <button className={styles.dropdown_item} onClick={() => {navigate("/userAccount");onClose();}}>
                    <span className={`${styles.dropdown_icon} ${styles.gray_icon}`}>
                        <img src="src/assets/images/user.png" alt="user" />
                    </span>
                    Your profile
                </button>

                <button className={styles.dropdown_item}>
                    <span className={`${styles.dropdown_icon} ${styles.gray_icon}`}>
                        <img src="src/assets/images/nft icon.png" alt="preview" />
                    </span>
                    Your NFTs
                </button>

                <button className={styles.dropdown_item}>
                    <span className={`${styles.dropdown_icon} ${styles.gray_icon}`}>
                        <img src="src/assets/images/cart .png" alt="shopping cart" />
                    </span>
                    You Bought
                </button>
            </div>

            <div className={styles.dropdown_section}>
                <button className={styles.dropdown_item}   onClick={() => {handleClose(); navigate('/dashboard');}}>
                    <span className={styles.gray_icon}>
                        <img src="src/assets/images/application.png" alt="preview"/>
                    </span>
                    Dashboard
                </button>
            </div>

            <div className={styles.dropdown_section}>
                <button className={styles.dropdown_button} onClick={onLogout}>
                    <span className={styles.red_icon}>
                        <img src="src/assets/images/sign out option.png" alt="sign out"/>
                    </span>
                    Sign out
                </button>
            </div>
        </div>
    );
};

export default UserIconDropdown;
