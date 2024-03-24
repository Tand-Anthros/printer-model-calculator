import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import { _common_props } from '@/styls/_interfaces';
import { _frame } from '@/styls/_default'


const ImageBox: React.FC<_common_props> = ({ value, style }) => {
  return (
    <Box>
      <Image
        src = { value }
        borderRadius = '20%'
        border = '0.2vw solid'
        width = "100%"
        maxWidth = '100%'
        { ..._frame }
        { ...style }
    /></Box>
)};


export default ImageBox;
