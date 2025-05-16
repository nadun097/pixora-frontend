import React, { useRef } from 'react';
import Card from "../../components/Card/Card";
import './DigitalArtsCollection.css';
//import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img3.png";

const mockData = [
  { title: 'Rufia 043', image: img1, price: '0.1 ETH', endDate: '21/03/24' },
  { title: 'Rufia 044', image: img2, price: '0.1 ETH', endDate: '22/03/24' },
  { title: 'Rufia 045', image: img3, price: '0.1 ETH', endDate: '23/03/24' },
  { title: 'Rufia 046', image: img4, price: '0.1 ETH', endDate: '24/03/24' },
  { title: 'Rufia 047', image: img5, price: '0.1 ETH', endDate: '25/03/24' },
  { title: 'Rufia 048', image: img6, price: '0.1 ETH', endDate: '26/03/24' },
  { title: 'Rufia 043', image: img1, price: '0.1 ETH', endDate: '21/03/24' },
  { title: 'Rufia 044', image: img2, price: '0.1 ETH', endDate: '22/03/24' },
  { title: 'Rufia 045', image: img3, price: '0.1 ETH', endDate: '23/03/24' },
  { title: 'Rufia 046', image: img4, price: '0.1 ETH', endDate: '24/03/24' },
  { title: 'Rufia 047', image: img5, price: '0.1 ETH', endDate: '25/03/24' },
  { title: 'Rufia 048', image: img6, price: '0.1 ETH', endDate: '26/03/24' },
];

const Section = ({ title, cards }: { title: string, cards: typeof mockData }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 1650;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="carousel-container">
        <button className="scroll-button left" onClick={() => scroll('left')}>
          <ChevronLeft size={24} />
        </button>

        <div className="cards-scroll" ref={scrollRef}>
          {cards.map((item, index) => (
            <div className="card-wrapper" key={`${title}-${index}`}>
              <Card
                title={item.title}
                image={item.image}
                price={item.price}
             
                description="Current Bid"
              />
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={() => scroll('right')}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const CollectionPage = () => {
  return (
    <>
      <div className="page-container">
       
        <aside className="sidebar">
          <input
            type="text"
            placeholder="Search NFTs..."
            className="search-input"
          />
          <div className="filters">
            <h3 className="filter-title">Status</h3>
            <ul className="filter-list">
              <li>Buy Now</li>
              <li>Ending Soon</li>
              <li>Recently Added</li>
            </ul>
          </div>
        </aside>

        <main className="main-contents">
          <Section title="Hot NFTs" cards={mockData} />
          <Section title="New Listings" cards={mockData} />
          <Section title="Ending Soon" cards={mockData} />

          <div className="load-more-wrapper">
            <button className="load-more-btn">Load More NFTs</button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CollectionPage;