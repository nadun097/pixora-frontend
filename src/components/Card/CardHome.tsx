import React, { useRef } from "react";
import styles from "./CardHome.module.css";

interface CardProps {
  id: number;
  image: string;
  onCardClick?: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, image, onCardClick }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const floatDuration = (4 + Math.random() * 3).toFixed(2); 
  const floatDelay = (Math.random() * 3).toFixed(2); 

  const handleClick = () => {
    if (onCardClick) {
      onCardClick(id);
    }
  };

  return (
    <div
      className={styles.card}
      style={{
        animationDuration: `${floatDuration}s`,
        animationDelay: `${floatDelay}s`,
        cursor: "pointer"
      }}
      onClick={handleClick}
    >
      <img ref={imgRef} src={image} className={styles.cardImage} />
    </div>
  );
};

export default Card;
