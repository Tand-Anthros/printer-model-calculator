import { Flex, Box } from '@chakra-ui/react';

function MyFlexGrid() {
  return (
    <Flex wrap='wrap' gap={4}>
      <Box flex='1 1 20%' h='200px' bg='tomato' />
      <Box flex='1 1 40%' h='100px' bg='papayawhip' />
      <Box flex='1 1 40%' h='100px' bg='papayawhip' />
      <Box flex='1 1 80%' h='100px' bg='tomato' />
    </Flex>
  );
}

export default MyFlexGrid;
