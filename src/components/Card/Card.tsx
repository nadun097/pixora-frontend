import React, { useEffect, useState, useRef } from "react";
import "./Card.css";

interface CardProps {
    id: number;
    image: string;
    title: string;
    description: string;
    price: string;
    onCardClick?: (id: number, textColor: string) => void;
}

const Card: React.FC<CardProps> = ({ id, image, title, description, price, onCardClick }) => {
    const [textColor, setTextColor] = useState<string>("white");
    const imgRef = useRef<HTMLImageElement>(null);

    // Function to convert RGB to HSL
    const rgbToHsl = (r: number, g: number, b: number) => {
        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0;
        let s = 0;
        const l = (max + min) / 2;

        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            if (max === r) {
                h = (g - b) / d + (g < b ? 6 : 0);
            } else if (max === g) {
                h = (b - r) / d + 2;
            } else {
                h = (r - g) / d + 4;
            }
            h /= 6;
        }

        return {
            h: h * 360, // Hue in degrees
            s: s * 100, // Saturation in percentage
            l: l * 100, // Lightness in percentage
        };
    };

    // Function to convert HSL back to RGB
    const hslToRgb = (h: number, s: number, l: number) => {
        s /= 100;
        l /= 100;

        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        const m = l - c / 5;

        let r: number,
            g: number,
            b: number;

        if (h >= 0 && h < 60) {
            r = c;
            g = x;
            b = 0;
        } else if (h >= 60 && h < 120) {
            r = x;
            g = c;
            b = 0;
        } else if (h >= 120 && h < 180) {
            r = 0;
            g = c;
            b = x;
        } else if (h >= 180 && h < 240) {
            r = 0;
            g = x;
            b = c;
        } else if (h >= 240 && h < 300) {
            r = x;
            g = 0;
            b = c;
        } else {
            r = c;
            g = 0;
            b = x;
        }

        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        return `rgb(${r}, ${g}, ${b})`;
    };

    const adjustLightness = (h: number, s: number, l: number): { h: number, s: number, l: number } => {
        let newL = l;
        if (newL >= 25 && newL <= 80) {
            newL = newL <= 50 ? 50 : 100; 
        }

        return { h, s, l: newL };
    };

    useEffect(() => {
        const imgElement = imgRef.current;
        if (!imgElement) return;

        const handleImageLoad = () => {
            try {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                if (!ctx) return;

                canvas.width = imgElement.width;
                canvas.height = imgElement.height;
                ctx.drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);

               
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const pixels = imageData.data;

                const colorMap: { [key: string]: number } = {};
                for (let i = 0; i < pixels.length; i += 4) {
                    const r = pixels[i];
                    const g = pixels[i + 1];
                    const b = pixels[i + 2];
                    const colorKey = `${r},${g},${b}`;

                    colorMap[colorKey] = (colorMap[colorKey] || 0) + 1;
                }

                
                let selectedColor: string | null = null;
                let maxLightness = 0;

                Object.entries(colorMap).forEach(([colorKey]) => {
                    const [r, g, b] = colorKey.split(",").map(Number);
                    const { h, s, l } = rgbToHsl(r, g, b);

                  
                    if (l >= 15 && l <= 100 && s >= 0 && s <= 100) {
                       
                        const {l: newL } = adjustLightness(h, s, l);

                        if (newL > maxLightness) {
                            selectedColor = colorKey;
                            maxLightness = newL;
                        }
                    }
                });
                if (selectedColor) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    const [r, g, b] = selectedColor.split(",").map(Number);

                    const { h, s, l } = rgbToHsl(r, g, b);
                    const adjustedColor = hslToRgb(h, s, l);

                    setTextColor(adjustedColor);
                } else {
                    setTextColor("white");
                }
            } catch (error) {
                console.error("Error extracting color:", error);
                setTextColor("black"); 
            }
        };

        imgElement.addEventListener("load", handleImageLoad);
        return () => imgElement.removeEventListener("load", handleImageLoad);
    }, [image]);

    const handleClick = () => {
        if (onCardClick) {
            onCardClick(id, textColor);
        }
    };
    return (
        <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
            <div className="shadow">
            </div>
            <div className="inner-shadow">
            </div>
            <img
                ref={imgRef}
                className="card-image"
                src={image}
                alt={title}
                crossOrigin="anonymous"
            />
            <div className="card-content" style={{ color: textColor }}>
                <h3 className="card-title">{title}</h3>
                <p className="line">________________________________________</p>
                <p className="card-description">{description}</p>
                <p className="priceCard">{price}</p>
                <button className="card-button"></button>
            </div>
        </div>
    );
};

export default Card;