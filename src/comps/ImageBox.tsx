import React, { useState, ChangeEvent } from 'react';
import { Box, Image } from '@chakra-ui/react';

import { _common_props } from '@/styls/_interfaces';


const ImageBox: React.FC<_common_props> = ({ value, style }) => {
  const [hue, setHue] = useState<number>(0);

  const handleHueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHue(Number(e.target.value));
  };

  return (
    <Box>
      <Image
        src = {value}
        sx = {style}
      />
    </Box>
  );
};

export default ImageBox;
