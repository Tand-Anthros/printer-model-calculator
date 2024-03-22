import React, { useRef, useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { _common_props } from "@/styls/_interfaces";


const SimpleText: React.FC<_common_props> = ({ value, style }) => {
  return (
    <Text style={ style }>
      { value }
    </Text>
  );
};


export default SimpleText;
