import { useState } from "react";
import styles from "./NavBar.module.css";
import UserIconDropdown from "../DropDown/UserIcondd";
import {useNavigate} from "react-router-dom";

type NavBarProps = {
    isLoggedIn: boolean;
    onLoginClick: () => void;
    onLogout: () => void;
};


function NavBar({ onLoginClick, isLoggedIn, onLogout }: NavBarProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleDropDownClick = () => setIsDropdownOpen((prev) => !prev);
    const handleDropdownClose = () => setIsDropdownOpen(false);

    return (
        <div className={styles.NavBar}>
            <img src="src/assets/images/pixoraLogo.png" className={styles.pixoraIcon} alt="Pixora Logo" />
            <div className={styles.NavBarButtons}>
                <div className={styles.NavButton} onClick={() => navigate("/")}>Home</div>
                <div className={styles.NavButton} onClick={() => navigate("/marketplace")}>Marketplace</div>

         

                <div className={styles.NavButton} onClick={() => navigate("/liveauction")}>Live Auctions</div>

                <div className={styles.NavButton} onClick={() => navigate("/digitalarts")}>Digital Arts</div>
                <div className={styles.NavButton} onClick={() => navigate("/photographs")}>Photographs</div>
            </div>
            {!isLoggedIn ? (
                <button className={styles.loginButton} onClick={onLoginClick}>
                    <div className={styles.textWrapper}>Login</div>
                </button>
            ) : (
                <div className={styles.profileContainer}>
                    <button className={styles.profileButton} onClick={handleDropDownClick}>
                    <img src="src/assets/images/User icon.png" className={styles.UserIcon} alt="Profile" />
                    </button>
                    {isDropdownOpen && (
                        <UserIconDropdown onClose={handleDropdownClose} onLogout={onLogout} />
                    )}
                </div>
            )}

        </div>
    );
}

export default NavBar;