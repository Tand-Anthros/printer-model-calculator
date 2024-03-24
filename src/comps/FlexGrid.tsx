import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import { _common_props, _comp_props } from "@/styls/_interfaces";


export const FlexRow: React.FC<{ value: _comp_props[], rowIndex: number }> = ({ value, rowIndex }) => {
  return (
    <Flex key={rowIndex} direction="row">
      {value.map(({ comp, ...item_subs }, index) => (
        <Box key={index} {...item_subs}>
          { comp }
        </Box>
      ))}
    </Flex>
  );
};


export const FlexColumn: React.FC<{ value: _comp_props[], columnIndex: number }> = ({ value, columnIndex }) => {
  return (
    <Flex key={columnIndex} direction="column">
      {value.map(({ comp, ...item_subs }, index) => (
        <Box key={index} {...item_subs}>
          { comp }
        </Box>
      ))}
    </Flex>
  );
};


export const FlexGrid: React.FC<{ value: Array<_comp_props>, style: object }> = ({ value, style }) => {
  return (
    <FlexColumn value = {value} columnIndex={0} {...style}>
    </FlexColumn>
  );
};


