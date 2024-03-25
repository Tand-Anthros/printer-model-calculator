// DropComp.tsx
import React, { useState } from 'react';
import { Select, Box, Button, List, ListItem } from '@chakra-ui/react';

import { _common_props } from '@/styls/_interfaces';


const DropComp: React.FC<_common_props> = ({ value, style }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <Box style={style}>
      <Button onClick={toggleDropdown}>
        Выберите опцию
      </Button>
      {isOpen && (
        <List spacing={3}>
          { value }
        </List>
      )}
    </Box>
  );
};

export default DropComp;


// {value.map((item, index) => (
// 	<ListItem key={index} style={{ cursor: 'pointer' }} onClick={() => console.log(item.comp)}>
// 		{item.comp}
// 	</ListItem>
// ))}

//<option value='option1'>Опция 1</option>