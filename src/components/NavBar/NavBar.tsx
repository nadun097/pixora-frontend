import styles from "./NavBar.module.css";

function NavBar({ onLoginClick }: { onLoginClick: () => void }) {
    return (
        <div className={styles.NavBar}>
            <img src="src/assets/images/pixoraLogo.png" className={styles.pixoraIcon}/>
            {/*NavBar Buttons*/}
            <div className={styles.NavBarButtons}>
                <div className={styles.NavButton}>Marketplace</div>
                <div className={styles.NavButton}>Live Auctions</div>
                <div className={styles.NavButton}>Digital Arts</div>
                <div className={styles.NavButton}>Photographs</div>
            </div>
            <button className={styles.loginButton} onClick={onLoginClick}>
                <div className={styles.textWrapper}>Login</div>
            </button>
        </div>
    )
}

export default NavBar