import styles from './NftDataView.module.css';
import { useParams, useLocation } from 'react-router-dom';
import verificationTick from '../../assets/images/verification tick.png';
import ownerImg from '../../assets/images/sia croven.jpg';

// Default fallback data for fields not present from navigation
const defaultData = {
    image: "https://placehold.co/600x600",
    nftName: "NFT Name",
    bidValue: "0.00 ETH",
    description: "No description available.",
    artist: "Sia Kroven",
    globalFloor: "0012",
    owner: "Ryan Reynolds",
    ownerImg: ownerImg
};

const LiveAuctionsPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const textColor = location.state?.textColor || "#fff";
    console.log(textColor);
    // Merge passed nft data with defaults
    const nftData = {
        ...defaultData,
        ...(location.state && location.state.nft ? location.state.nft : {})
    };

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
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <h4 className={styles.nftCreator}>
                                        {nftData.artist} <span className={styles.verifiedBadge}><img src={verificationTick}  className={styles.verifiedBadge}></img></span>
                                    </h4>
                                </div>
                                <p className={styles.nftFloor}>Global Floor {nftData.globalFloor}</p>
                            </div>
                        </div>
                        <h1 className={styles.nftTitle}>
                            {nftData.nftName} <span className={styles.nftNumber}>#{id?.toString().slice(-5)}</span>
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