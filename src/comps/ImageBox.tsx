import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import { _common_props } from '@/styls/_interfaces';
import { _frame } from '@/styls/_default'


const ImageBox: React.FC<_common_props> = ({ value, style }) => {
  return (
    <Box>
      <Image
        src = { value }
        borderRadius = '2vw'
        border = '0.2vw solid'
        { ..._frame }
        { ...style }
    /></Box>
)};

export default ImageBox;
