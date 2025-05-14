import React, { useState } from "react";
import styles from "./NavBar.module.css";
import UserIconDropdown from "../DropDown/UserIcondd";

type NavBarProps = {
  isLoggedIn: boolean;
  onLoginClick: () => void;
};

function NavBar({ onLoginClick, isLoggedIn }: NavBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropDownClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.NavBar}>
      <img src="src/assets/images/pixoraLogo.png" className={styles.pixoraIcon} alt="Pixora Logo" />
      <div className={styles.NavBarButtons}>
        <div className={styles.NavButton}>Marketplace</div>
        <div className={styles.NavButton}>Live Auctions</div>
        <div className={styles.NavButton}>Digital Arts</div>
        <div className={styles.NavButton}>Photographs</div>
      </div>
      {!isLoggedIn ? (
        <div className={styles.profileContainer}>
          <button className={styles.profileButton} onClick={handleDropDownClick}>
            <img src="src/assets/images/User icon.png" className={styles.UserIcon} alt="Profile" />
          </button>
          
          {isDropdownOpen && <UserIconDropdown onClose={handleDropdownClose} />}
        </div>
      ) : (
        <button className={styles.loginButton} onClick={onLoginClick}>
          <div className={styles.textWrapper}>Login</div>
        </button>
      )}
    </div>
  );
}

export default NavBar;
