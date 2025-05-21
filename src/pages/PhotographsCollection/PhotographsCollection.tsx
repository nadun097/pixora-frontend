import Card from "../../components/Card/Card";
import './PhotographsCollection.css';
import Footer from '../../components/Footer/Footer';

import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img3.png";

const mockData = [
  { id: 21, title: 'Rufia 043', image: img1, price: '0.1 ETH', endDate: '21/03/24' },
  { id: 22, title: 'Rufia 044', image: img2, price: '0.1 ETH', endDate: '22/03/24' },
  { id: 23, title: 'Rufia 045', image: img3, price: '0.1 ETH', endDate: '23/03/24' },
  { id: 24, title: 'Rufia 046', image: img4, price: '0.1 ETH', endDate: '24/03/24' },
  { id: 25, title: 'Rufia 047', image: img5, price: '0.1 ETH', endDate: '25/03/24' },
  { id: 26, title: 'Rufia 048', image: img6, price: '0.1 ETH', endDate: '26/03/24' },
  { id: 27, title: 'Rufia 049', image: img1, price: '0.1 ETH', endDate: '27/03/24' },
  { id: 28, title: 'Rufia 050', image: img2, price: '0.1 ETH', endDate: '28/03/24' },
  { id: 29, title: 'Rufia 043', image: img1, price: '0.1 ETH', endDate: '21/03/24' },
  { id: 30, title: 'Rufia 044', image: img2, price: '0.1 ETH', endDate: '22/03/24' },
  { id: 31, title: 'Rufia 045', image: img3, price: '0.1 ETH', endDate: '23/03/24' },
  { id: 32, title: 'Rufia 046', image: img4, price: '0.1 ETH', endDate: '24/03/24' },
  { id: 33, title: 'Rufia 047', image: img5, price: '0.1 ETH', endDate: '25/03/24' },
  { id: 34, title: 'Rufia 048', image: img6, price: '0.1 ETH', endDate: '26/03/24' },
  { id: 35, title: 'Rufia 049', image: img1, price: '0.1 ETH', endDate: '27/03/24' },
  { id: 36, title: 'Rufia 050', image: img2, price: '0.1 ETH', endDate: '28/03/24' },
];


const CollectionPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/nft/${id}`);
  };

  return (
    <>
      <h2 className="hdtittle">PHOTOGRAPHs</h2>
      <div className="video-container">
        <video
          className="video-background"
          src="src/assets/videos/(3) NEW YORK CITY _ Cinematic Video _ Sony A7SIII - YouTube - Google Chrome 2025-05-18 22-37-47.mp4"  // Now using the imported video
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <main className="main-contents">
        <h2 className="title">PHOTOGRAPHs Collection</h2>
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

 