import styles from './UserAccount.module.css';
import ProfImg from '../../assets/images/profileImage.png';
import userImg from '../../assets/images/sia croven.jpg';
import { useNavigate } from 'react-router-dom';
import  Verified  from '../../assets/images/verification tick.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';
import linkedin from '../../assets/images/linkedin.png';
import Card from "../../components/Card/Card";
import Footer from '../../components/Footer/Footer';
import fallbackImg from '../../assets/images/no_user2.png';
import fallbackwallpaper from '../../assets/images/no wallpaper.jpg';


import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img3.png";

const userData = {
    _id: "6809644fd457793bad901156",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    contact: "+1234567890",
    birthday: "1990-01-01",
    profile_image: "userImg",
    
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

const mockData = [
  { id: 1, title: 'Rufia 043', image: img1, price: '0.1 ETH', endDate: '21/03/24' },
  { id: 2, title: 'Rufia 044', image: img2, price: '0.1 ETH', endDate: '22/03/24' },
  { id: 3, title: 'Rufia 045', image: img3, price: '0.1 ETH', endDate: '23/03/24' },
  { id: 4, title: 'Rufia 046', image: img4, price: '0.1 ETH', endDate: '24/03/24' },
  { id: 5, title: 'Rufia 047', image: img5, price: '0.1 ETH', endDate: '25/03/24' },
  { id: 6, title: 'Rufia 048', image: img6, price: '0.1 ETH', endDate: '26/03/24' },
  { id: 7, title: 'Rufia 049', image: img1, price: '0.1 ETH', endDate: '27/03/24' },
  { id: 8, title: 'Rufia 050', image: img2, price: '0.1 ETH', endDate: '28/03/24' },];

const CollectionPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/nft/${id}`);
  };




    return (
    <div className={styles.userDisplay}>
      <div className={styles.profileimageGradiant}>
        <img
          src={userData.profileimage}
          alt="NFT"
          className={styles.profileImage}
          onError={e => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackwallpaper;
          }}
        />
      </div>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.nftContent}>
        <div className={styles.userDetails}>
          <div>
            <div className={styles.userImage}>
              <img
                src={userData.profile_image}
                alt="Owner DP"
                className={styles.userImage}
                onError={e => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackImg;
                }}
              />
            </div>
          </div>
          <div className={styles.userBidSection}>
            <div className={styles.placeBid}>
              <div>
                <div className={styles.VerifiedArtistLine}>
                  {userData.verification_status === "verified" && (
                    <>
                      <img src={Verified} className={styles.Verified} alt="Verified Badge" />
                      <h1 className={styles.VerifiedArtist}>Verified Artist</h1>
                    </>
                  )}
                  <h1 className={styles.VerifiedArtist2}>.</h1>
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
          {userData.instagram && (
            <a href={`https://${userData.instagram}`} target="_blank" rel="noopener noreferrer">
              <img src={instagram} className={styles.socialM} alt="Instagram" />
            </a>
          )}
          {userData.facebook && (
            <a href={`https://${userData.facebook}`} target="_blank" rel="noopener noreferrer">
              <img src={facebook} className={styles.socialM} alt="Facebook" />
            </a>
          )}
          {userData.twitter && (
            <a href={`https://${userData.twitter}`} target="_blank" rel="noopener noreferrer">
              <img src={twitter} className={styles.socialM} alt="Twitter" />
            </a>
          )}
          {userData.linkedin && (
            <a href={`https://${userData.linkedin}`} target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className={styles.socialM} alt="LinkedIn" />
            </a>
          )}
        </div>
      </div>
      <div className={styles.listGridAria}>
        <h2 className={styles.gridTopic}>NFT Collection</h2>
      <div className={styles.cardList}>
        {mockData.map((item) => (
          <div className={styles.cardListItem} key={`nft-${item.id}`}>
            <Card
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              description="Current Bid"
              onCardClick={handleCardClick}
            />
          </div>
        ))}
      </div>
      </div>
        <div className={styles.footer}>
      <Footer />
      </div>
    </div>
       
    );
};

export default CollectionPage;
