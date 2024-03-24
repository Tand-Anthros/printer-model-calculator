import React from 'react';
import { Box, Spacer, Flex } from '@chakra-ui/react';

import { _common_props } from '@/styls/_interfaces';

const Space: React.FC<_common_props> = ({ value, style }) => {
  const direction = value === 'horizontal' ? 'row' : 'column';
  return (
    <Box visibility='hidden'>
      <Spacer h = {value} { ...style }/>
    </Box>    
)};

export default Space;
