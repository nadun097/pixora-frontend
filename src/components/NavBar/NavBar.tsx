import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import UserIconDropdown from "../DropDown/UserIcondd";
import { useNavigate, useLocation } from "react-router-dom";

type NavBarProps = {
    isLoggedIn: boolean;
    onLoginClick: () => void;
    onLogout: () => void;
};


function NavBar({ onLoginClick, isLoggedIn, onLogout }: NavBarProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeButton, setActiveButton] = useState<string>("");
    const navigate = useNavigate();
    const location = useLocation();

    const navButtons = [
        { label: "Home", path: "/" },
        { label: "Marketplace", path: "/marketplace" },
        { label: "Live Auctions", path: "/liveauctions" },
        { label: "Digital Arts", path: "/digitalarts" },
        { label: "Photographs", path: "/photographs" },
    ];

    // Highlight the correct nav button based on current path, otherwise no highlight
    useEffect(() => {
        // Only highlight if on a known nav button path, otherwise clear highlight
        const found = navButtons.find(btn =>
            location.pathname === btn.path ||
            (btn.path !== "/" && location.pathname.startsWith(btn.path))
        );
        setActiveButton(found ? found.label : "");
    }, [location.pathname]);

    const handleDropDownClick = () => setIsDropdownOpen((prev) => !prev);
    const handleDropdownClose = () => setIsDropdownOpen(false);

    return (
        <div className={styles.NavBar}>
            <img src="src/assets/images/pixoraLogo.png" className={styles.pixoraIcon} alt="Pixora Logo" />
            <div className={styles.NavBarButtons}>
                {navButtons.map((btn) => (
                    <div
                        key={btn.label}
                        className={`${styles.NavButton} ${activeButton === btn.label ? styles.activeNavButton : ""}`}
                        onClick={() => {
                            navigate(btn.path);
                        }}
                    >
                        {btn.label}
                    </div>
                ))}
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

export default NavBar;