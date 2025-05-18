import React, { useRef } from 'react';
import Card from "../../components/Card/Card";
import styles from './NftCollection.module.css';
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
    <div className={styles.section}>
      <h2 className={styles['section-title']}>{title}</h2>
      <div className={styles['carousel-container']}>
        <button className={`${styles['scroll-button']} ${styles.left}`} onClick={() => scroll('left')}>
          <ChevronLeft size={24} />
        </button>

        <div className={styles['cards-scroll']} ref={scrollRef}>
          {cards.map((item, index) => (
            <div className={styles['card-wrapper']} key={`${title}-${index}`}>
              <Card
                title={item.title}
                image={item.image}
                price={item.price}
                description="Current Bid"
              />
            </div>
          ))}
        </div>

        <button className={`${styles['scroll-button']} ${styles.right}`} onClick={() => scroll('right')}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const CollectionPage = () => {
  return (
    <>
      <div className={styles['page-container']}>
        <aside className={styles.sidebar}>
          <input
            type="text"
            placeholder="Search NFTs..."
            className={styles['search-input']}
          />
          <div className={styles.filters}>
            <h3 className={styles['filter-title']}>Status</h3>
            <ul className={styles['filter-list']}>
              <li>Buy Now</li>
              <li>Ending Soon</li>
              <li>Recently Added</li>
            </ul>
          </div>
        </aside>

        <main className={styles['main-contents']}>
         <Section title="Hot NFTs"cards={mockData} />
          <Section title="New Listings" cards={mockData} />
          <Section title="Ending Soon" cards={mockData} />

          <div className={styles['load-more-wrapper']}>
            <button className={styles['load-more-btn']}>Load More NFTs</button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CollectionPage;
