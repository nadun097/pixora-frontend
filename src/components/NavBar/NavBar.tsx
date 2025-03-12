import './NavBar.css'


function NavBar() {
    return (
        <div className="NavBar">
            <div className="pi-xora-logo">
                <div className="pi-xora-text">piXora</div>
                <img className="pi-xora-icon"
                    src="https://cdn.animaapp.com/projects/67ac3ff7b09554a0b38573b8/releases/67ac401ef81239f3d08a9f30/img/reswr-1.png"
                    anima-src="https://cdn.animaapp.com/projects/67ac3ff7b09554a0b38573b8/releases/67ac401ef81239f3d08a9f30/img/reswr-1.png"
                    alt="reswr 1" />
            </div>
            {/*NavBar Buttons*/}
            <div className="NavBar-Buttons">
                <div className="nav-button nav-button-marketplace-button inter-bold-white-24px">Marketplace</div>
                <div className="nav-button nav-button-live-auctions-button inter-bold-white-24px">Live Auctions</div>
                <div className="nav-button nav-button-digital-arts-button inter-bold-white-24px">Digital Arts</div>
                <div className="nav-button nav-button-photographs-button inter-bold-white-24px">Photographs</div>
            </div>

            <div className="profile-button">
                <img className="user-icon"
                    src="https://cdn.animaapp.com/projects/67ac3ff7b09554a0b38573b8/releases/67ac401ef81239f3d08a9f30/img/user-square-rounded.svg"
                    alt="user-square-rounded" />
            </div>
        </div>
    )
}

export default NavBar