import React from "react";
import { Flex, Box } from "@chakra-ui/react";

type Comp = {
  comp: React.ReactElement;
  flex?: string;
  marginLeft?: string;
  marginTop?: string;
};

interface TableProps {
  comps: Comp[];
  style: React.CSSProperties;
}

const FlexGrid: React.FC<TableProps> = ({ comps, style }) => {
  return (
    <Flex direction="column" sx = { style }>
      {/* Контейнер для заголовка */}
      <Box flex={comps[0].flex}>
        {comps[0].comp}
      </Box>
      
      {/* Контейнер для RoundedBox */}
      <Flex direction="row">
      {comps.slice(1).map((item, index) => (
        <Box key={index} flex={item.flex} marginLeft={item.marginLeft} marginTop={item.marginTop}>
          {item.comp}
        </Box>
      ))}
      </Flex>
    </Flex>
  );
};

export default FlexGrid;
