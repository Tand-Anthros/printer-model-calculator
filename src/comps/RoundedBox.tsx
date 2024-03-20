import React, { useState, ChangeEvent } from 'react';

interface ImageComponentProps {
  src: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src }) => {
  const [hue, setHue] = useState<number>(0);

  const handleHueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHue(Number(e.target.value));
  };

  return (
    <div>
      <img
        src={src}
        style={{
          filter: `hue-rotate(${hue}deg)`,
          borderRadius: '15px',
          border: '1px solid #000',
          padding: '5px'
        }}
        alt="Customizable Image"
      />
      <input
        type="range"
        min="0"
        max="360"
        value={hue.toString()}
        onChange={handleHueChange}
      />
    </div>
  );
};

export default ImageComponent;

