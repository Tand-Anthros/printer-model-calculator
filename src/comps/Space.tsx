import React from 'react';
import { Box, Spacer, Flex } from '@chakra-ui/react';

import { _common_props } from '@/styls/_interfaces';


const Space: React.FC<_common_props> = ({ value, style }) => {
  value = value ? value : 0
  const num = parseFloat(value);
  value = `${value}`.replace(`${num}`, '');

  return (
    <Box visibility='hidden' >
      <Spacer h = {[num/5+value, num/1.3+value, num+value]}
        { ...style } />
    </Box>    
)};


export default Space;
