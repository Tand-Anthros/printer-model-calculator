import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import { _common_props, _comp_props } from "@/styls/_interfaces";


const FlexGrid: React.FC<_common_props> = ({ value, style }) => {
  return (
    <Flex direction="column" sx={style}>
      {value.map((row: _comp_props[], rowIndex: number) => (
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
