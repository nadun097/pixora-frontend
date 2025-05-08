import React, { useRef } from "react";
import "./CardHome.css";

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  
  const floatDuration = (4 + Math.random() * 3).toFixed(2); 
  const floatDelay = (Math.random() * 3).toFixed(2); 

  return (
    <div
      className="card"
      style={{
        animationDuration: `${floatDuration}s`,
        animationDelay: `${floatDelay}s`,
      }}
    >
      <img ref={imgRef} src={image} className="card-image" />
    </div>
  );
};

export default Card;
