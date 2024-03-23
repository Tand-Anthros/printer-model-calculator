import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import { _common_props, _comp_props } from "@/styls/_interfaces";


const FlexAside = undefined;


const FlexRow: React.FC<{ row: _comp_props[], rowIndex: number }> = ({ row, rowIndex }) => {
  return (
    <Flex key={rowIndex} direction="row">
      {row.map(({ comp, ...item_subs }, index) => (
        <Box key={index} {...item_subs}>
          { comp }
        </Box>
      ))}
    </Flex>
)};


const FlexGrid: React.FC<_common_props> = ({ value, style }) => {
  return (
    <Flex direction="column" 
      width = "100%"
      maxWidth = '100%'
      { ...style }>
      {value.map(( row: _comp_props[], rowIndex: number ) => (
        <FlexRow key={rowIndex} row={row} rowIndex={rowIndex} />
      ))}
    </Flex>
)};


export default FlexGrid;
