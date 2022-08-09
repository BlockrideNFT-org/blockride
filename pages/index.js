import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Content from '../components/Content';

const Home = () => {
  return (
    <>
      <Box
        bg="secondary"
        color="white"
        w="100%"
        bgImage={"url('images/bg_street.webp')"}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Box maxW="1200px" w="100%" m="auto">
          <Header />
          <Hero />
        </Box>
      </Box>
      <Content />
    </>
  );
};

export default Home;
