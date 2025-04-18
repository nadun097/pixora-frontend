import './NavBar.css'


function NavBar() {
    return (
        <div className="NavBar">
            <img src="src/assets/images/pixoraLogo.png" className="pi-xora-icon" />
            {/*NavBar Buttons*/}
            <div className="NavBar-Buttons">
                <div className="nav-button nav-button-marketplace-button inter-bold-white-24px">Marketplace</div>
                <div className="nav-button nav-button-live-auctions-button inter-bold-white-24px">Live Auctions</div>
                <div className="nav-button nav-button-digital-arts-button inter-bold-white-24px">Digital Arts</div>
                <div className="nav-button nav-button-photographs-button inter-bold-white-24px">Photographs</div>
            </div>

            <div className="profile-button">
                    <button className="login-button">
                        <div className="overlap-group">
                            <div className="text-wrapper">Login</div>
                        </div>
                    </button>
            </div>
        </div>
    )
}

export default NavBar