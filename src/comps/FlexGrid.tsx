import React from "react";
import { Flex, Box } from "@chakra-ui/react";


type Comp = {
  comp: React.ReactElement;
  flex?: string;
  marginLeft?: string;
  marginTop?: string;
};

interface TableProps {
  value: Comp[][];
  style: React.CSSProperties;
}


const FlexGrid: React.FC<TableProps> = ({ value, style }) => {
  return (
    <Flex direction="column" sx={style}>
      {value.map((row, rowIndex) => (
        <Flex key={rowIndex} direction="row">
          {row.map(({ comp, ...item_subs }, index) => (
            <Box key={index} {...item_subs}>
              {comp}
            </Box>
          ))}
        </Flex>
      ))}
    </Flex>
  );
};


export default FlexGrid;
