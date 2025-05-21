import styles from './UserAccount.module.css';
import ProfImg from '../../assets/images/profileImage.png';
import userImg from '../../assets/images/sia croven.jpg';
import { useParams, useLocation } from 'react-router-dom';
import  Verified  from '../../assets/images/verification tick.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';
import linkedin from '../../assets/images/linkedin.png';

const userData = {
    _id: "6809644fd457793bad901156",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    contact: "+1234567890",
    birthday: "1990-01-01",
    profile_image: userImg,
    user_type: "Artist",
    bio: "Digital artist specializing in abstract art",
    facebook: "www.google.com",
    instagram: "www.google.com",
    twitter: "www.google.com",
    linkedin: "www.google.com",
    verification_status: "verified",
    profileimage: ProfImg,           
    artistImg: userImg,       
    
   
        
   
};

const LiveAuctionsPage = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const textColor = location.state?.textColor || "#fff";

    return (
        <div className={styles.userDisplay}>
            <div className={styles.profileimageGradiant}>
                <img src={userData.profileimage} alt="NFT" className={styles.profileImage} />
            </div>
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.nftContent}>
                <div className={styles.userDetails} style={{ color: textColor }}>
                    <div>
                        <div className={styles.userImage}>
                            <img src={userData.profile_image} alt="Owner DP" className={styles.userImage} />
                        </div>
                    </div>
                    <div className={styles.userBidSection}>
                        <div className={styles.placeBid}>
                            <div>
                                <div className={styles.VerifiedArtistLine}>
                                    <img src={Verified} className={styles.Verified}></img>
                                    <h1 className={styles.VerifiedArtist}>Verified {userData.user_type}</h1>
                                </div>
                                <h3 className={styles.userName}>{userData.first_name} {userData.last_name}</h3>
                            </div>
                        </div> 
                    </div>
                    <div className={styles.userDescription}>
                        <p>
                            {userData.bio}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.socialLine}>
                    <img src={instagram} className={styles.socialM}></img>
                    <img src={facebook} className={styles.socialM}></img>
                    <img src={twitter} className={styles.socialM}></img>
                    <img src={linkedin} className={styles.socialM}></img>
                </div>
            </div>
        </div>
    );
};

export default LiveAuctionsPage;
