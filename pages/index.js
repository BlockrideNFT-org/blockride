import React from 'react';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box
      bg="#0C1F47"
      color="white"
      w="100%"
      bgImage={"url('https://i.ibb.co/3v4TBrG/street.webp')"}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box maxW="1200px" w="100%" m="auto" h="100vh"></Box>
    </Box>
  );
};

export default Home;
