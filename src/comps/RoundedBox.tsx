import React, { useState, ChangeEvent } from 'react';

import { _common_props } from '@/styls/_interfaces';


const RoundedBox: React.FC<_common_props> = ({ value, style }) => {
  const [hue, setHue] = useState<number>(0);

  const handleHueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHue(Number(e.target.value));
  };

  return (
    <div>
      <img
        src={ value }
        style={{ 
          ...style, 
          filter: `hue-rotate(${hue}deg)`
        }}
        alt="Customizable Image"
      />
    </div>
  );
};


export default RoundedBox;


{/* {<input
  type="range"
  min="0"
  max="360"
  value={hue.toString()}
  onChange={handleHueChange}
/>} */}