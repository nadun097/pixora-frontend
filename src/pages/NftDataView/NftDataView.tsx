import styles from './NftDataView.module.css';
import NftImg from '../../assets/images/highlight_1.png';
import ownerImg from '../../assets/images/sia croven.jpg';
import { useParams, useLocation } from 'react-router-dom';
import verificationTick from '../../assets/images/verification tick.png';

const nftData = {
   
    image: NftImg,           
    artist: 'Sia Kroven',
    artistImg: ownerImg,    
    globalFloor: '0012',
    nftName: 'Azuki',
    bidValue: '0.1 ETH',
    owner: 'Ryan Reynolds',
    ownerImg: ownerImg,      
    description: `Versions of the Lorem Ipsum text have been used in typesetting at least since the 1960s,
    when it was popularized by advertisements for Letraset transfer sheets...`
};

const LiveAuctionsPage = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const textColor = location.state?.textColor || "#fff";

    return (
        <div className={styles.nftDisplay}>
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.nftContent}>
                <div className={styles.nftImageContainer}>
                    <img src={nftData.image} alt="NFT" className={styles.nftImage} />
                </div>
                <div className={styles.nftDetails} style={{ color: textColor }}>
                    <div>
                        <div className={styles.nftHeader}>
                            <div>
                                {/* <h1 className={styles.nftMainHeading}>NFT Snapshot</h1> */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                   
                                    <h4 className={styles.nftCreator}>
                                        {nftData.artist} <span className={styles.verifiedBadge}><img src={verificationTick}  className={styles.verifiedBadge}></img></span>
                                    </h4>
                                </div>
                                <p className={styles.nftFloor}>Global Floor {nftData.globalFloor}</p>
                            </div>
                        </div>
                        <h1 className={styles.nftTitle}>
                            {nftData.nftName} <span className={styles.nftNumber}>#{id }</span>
                        </h1>
                        <div className={styles.nftOwner}>
                            <img src={nftData.ownerImg} alt="Owner DP" className={styles.ownerImage} />
                            <div className={styles.textLineing}>
                                <span className={styles.ownerLabel}>Owner</span>
                                <span className={styles.ownerName}>{nftData.owner}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.nftBidSection}>
                        <div className={styles.placeBid}>
                            <div className={styles.currentBid}>
                                <span className={styles.currentBidLabel}>Current BID</span>
                                <h3>{nftData.bidValue}</h3>
                            </div>
                            
                        </div>
                           
                    </div>
                 <div className={styles.buttonSection}>
  <button className={styles.loginButton}>
                    <div className={styles.textWrapper}>BUY NOW</div>
                </button>
                   </div>
                    <div className={styles.nftDescription} style={{ position: "relative" }}>
                         
                        <h4>Description</h4>
                        <p>
                            {nftData.description}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <img src={nftData.image} alt="NFT" className={styles.backgroundImage} />
            </div>
        </div>
    );
};

export default LiveAuctionsPage;
