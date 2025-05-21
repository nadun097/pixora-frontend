import React from 'react';
import Card from "../../components/Card/Card";
import './DigitalArtsCollection.css';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img3.png";

const mockData = [
  { id: 1, title: 'Rufia 043', image: img1, price: '0.1 ETH', endDate: '21/03/24' },
  { id: 2, title: 'Rufia 044', image: img2, price: '0.1 ETH', endDate: '22/03/24' },
  { id: 3, title: 'Rufia 045', image: img3, price: '0.1 ETH', endDate: '23/03/24' },
  { id: 4, title: 'Rufia 046', image: img4, price: '0.1 ETH', endDate: '24/03/24' },
  { id: 5, title: 'Rufia 047', image: img5, price: '0.1 ETH', endDate: '25/03/24' },
  { id: 6, title: 'Rufia 048', image: img6, price: '0.1 ETH', endDate: '26/03/24' },
  { id: 7, title: 'Rufia 049', image: img1, price: '0.1 ETH', endDate: '27/03/24' },
  { id: 8, title: 'Rufia 050', image: img2, price: '0.1 ETH', endDate: '28/03/24' },
  { id: 9, title: 'Rufia 043', image: img1, price: '0.1 ETH', endDate: '21/03/24' },
  { id: 10, title: 'Rufia 044', image: img2, price: '0.1 ETH', endDate: '22/03/24' },
  { id: 11, title: 'Rufia 045', image: img3, price: '0.1 ETH', endDate: '23/03/24' },
  { id: 12, title: 'Rufia 046', image: img4, price: '0.1 ETH', endDate: '24/03/24' },
  { id: 13, title: 'Rufia 047', image: img5, price: '0.1 ETH', endDate: '25/03/24' },
  { id: 14, title: 'Rufia 048', image: img6, price: '0.1 ETH', endDate: '26/03/24' },
  { id: 15, title: 'Rufia 049', image: img1, price: '0.1 ETH', endDate: '27/03/24' },
  { id: 16, title: 'Rufia 050', image: img2, price: '0.1 ETH', endDate: '28/03/24' },
];


const CollectionPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/nft/${id}`);
  };

  return (
    <>
      <h2 className="hdtittle">DIGITAL ARTs</h2>
      <div className="video-container">
        <video
          className="video-background"
          src="src/assets/videos/(4) Hardwell - Sanctuary (Official Video) - YouTube - Google Chrome 2025-05-18 18-14-10.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <main className="main-contents">
        <h2 className="title">NFT Collection</h2>
        <div className="grid-container">
          {mockData.map((item) => (
            <div className="grid-card-wrapper" key={`nft-${item.id}`}>
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
        <div className="load-more-wrapper">
          <button className="load-more-btn">Load More NFTs</button>
        </div>
      </main>
      <Footer />
      
    </>
  );
};

export default CollectionPage;
