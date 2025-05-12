import styles from "./NavBar.module.css";

type NavBarProps = {
    isLoggedIn: boolean;
    onLoginClick: () => void;

    
};

function NavBar({ onLoginClick, isLoggedIn }: NavBarProps) {
    return (
        <div className={styles.NavBar}>
            <img src="src/assets/images/pixoraLogo.png" className={styles.pixoraIcon} alt="Pixora Logo" />
            <div className={styles.NavBarButtons}>
                <div className={styles.NavButton}>Marketplace</div>
                <div className={styles.NavButton}>Live Auctions</div>
                <div className={styles.NavButton}>Digital Arts</div>
                <div className={styles.NavButton}>Photographs</div>
            </div>
            {isLoggedIn ? (
                <button className={styles.profileButton}>
                    <img src="src/assets/images/User icon.png" className={styles.UserIcon} alt="Profile" />
                </button>
            ) : (
                <button className={styles.loginButton} onClick={onLoginClick}>
                    <div className={styles.textWrapper}>Login</div>
                </button>
            )}
        </div>
    );
}

export default NavBar;
