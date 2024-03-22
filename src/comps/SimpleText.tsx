import React, { useRef, useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

interface SimpleTextProps {
  text: string;
  style?: React.CSSProperties;
}

const SimpleText: React.FC<SimpleTextProps> = ({ text }) => {
  return (
    <Text style={{ fontSize: '5vw' }}>
      {text}
    </Text>
  );
};

export default SimpleText;
