import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import { _common_props } from '@/styls/_interfaces';


const ImageBox: React.FC<_common_props> = ({ value, style }) => {
  return (
    <Box>
      <Image { ...style }
        src = { value }
      />
    </Box>
)};

export default ImageBox;
