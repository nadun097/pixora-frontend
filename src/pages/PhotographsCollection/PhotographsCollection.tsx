import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import './PhotographsCollection.css';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from "react-router-dom";
import { showAlert } from "../../components/Auth/Alert.tsx";

const CollectionPage = () => {
  const [nfts, setNfts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    showAlert("loading...", 'success');
    fetch("https://pixora-f96ef5c321f5.herokuapp.com/api/nft/all?art_type=photography")
        .then(res => res.json())
        .then(data => {
          setNfts(data.nfts || []);
        });
  }, []);

  // Pass only the available API data for the NFT
  const handleCardClick = (item) => {
    navigate(`/nft/${item._id}`, {
      state: {
        nft: {
          image: `data:image/jpeg;base64,${item.imageBase64}`,
          nftName: item.name,
          bidValue: item.price ? `${item.price} ETH` : undefined,
          description: item.description,
        }
      }
    });
  };

  return (
      <>
        <h2 className="hdtittle">PHOTOGRAPHs</h2>
        <div className="video-container">
          <video
              className="video-background"
              src="src/assets/videos/Photographs_background_video.mp4"
              autoPlay
              loop
              muted
              playsInline
          />
        </div>
        <main className="main-contents">
          <h2 className="title">PHOTOGRAPHs Collection</h2>
          <div className="grid-container">
            {nfts.map((item) => (
                <div className="grid-card-wrapper" key={`nft-${item._id}`}>
                  <Card
                      id={item._id}
                      title={item.name}
                      image={`data:image/jpeg;base64,${item.imageBase64}`}
                      price={"Current Price"}
                      description={item.price+" ETH"}
                      onCardClick={() => handleCardClick(item)}
                  />
                </div>
            ))}
          </div>
          <div className="load-more-wrapper">
            <button className="load-more-btn">Load More NFTs</button>
          </div>
        </main>
        <Footer />
      </>
  );
};

export default CollectionPage;