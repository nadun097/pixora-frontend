import React, { useEffect, useRef } from "react";
import styles from "./DecorCard.module.css";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg"; 
import img7 from "../../assets/images/img7.jpeg";
import img8 from "../../assets/images/img3.png";
import img9 from "../../assets/images/img4.png";
import img10 from "../../assets/images/img5.jpg";
import img11 from "../../assets/images/img1.jpg";
import img12 from "../../assets/images/img2.png";
import img13 from "../../assets/images/img3.png";
import img14 from "../../assets/images/img4.png";
import img15 from "../../assets/images/img5.jpg";
import img16 from "../../assets/images/img1.jpg";
import img17 from "../../assets/images/img2.png";
import img18 from "../../assets/images/img3.png";
import img19 from "../../assets/images/img4.png";
import img20 from "../../assets/images/img5.jpg";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}


const baseImages = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20
];

const imageList = shuffleArray(
  Array(140).fill(0).map((_, i) => baseImages[i % baseImages.length])
);

interface CardProps {
  image: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ image, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const duration = 5 + Math.random() * 9;
      const delay = Math.random() * 5;
      const xMovement = 5 + Math.random() * 10;
      const yMovement = 5 + Math.random() * 9;
      const rotation = 2 + Math.random() * 2;

      cardRef.current.style.setProperty('--duration', `${duration}s`);
      cardRef.current.style.setProperty('--delay', `${delay}s`);
      cardRef.current.style.setProperty('--x-move', `${xMovement}px`);
      cardRef.current.style.setProperty('--y-move', `${yMovement}px`);
      cardRef.current.style.setProperty('--rotation', `${rotation}deg`);
    }
  }, []);

  return (
    <div ref={cardRef} className={styles.Dcard} data-index={index}>
      <div className={styles.Dcard_inner}>
        <img src={image} alt={`NFT ${index + 1}`} className={styles.Dcard_image} />
        <div className={styles.Dcard_glow}></div>
      </div>
    </div>
  );
};

const DecorCard: React.FC = () => {
  return (
    <div className={styles.Dcard_grid_container}>
      <div className={styles.Dcard_grid}>
        {imageList.map((img, index) => (
          <Card key={`Dcard-${index}`} image={img} index={index} />
        ))}
      </div>
    </div>
  );
};

export default DecorCard;
