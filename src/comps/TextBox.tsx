import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { _common_props } from "@/styls/_interfaces";


const TextBox: React.FC<_common_props> = ({ value, style }) => {
  return (
    <Box>
      <Text { ...style }>
        { value }
      </Text>
    </Box>
)};


export default TextBox;
