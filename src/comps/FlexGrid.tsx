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
  prop: React.CSSProperties;
}

const FlexGrid: React.FC<TableProps> = ({ comps, prop }) => {
  return (
    <Flex direction="column" width="100%" sx = { prop }>
      {/* Контейнер для заголовка */}
      <Box width="100%">
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
