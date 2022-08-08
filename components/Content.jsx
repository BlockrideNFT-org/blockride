import React from 'react';
import { Box, Center, Flex, Heading, Text, Image } from '@chakra-ui/react';

const Content = () => {
  return (
    <>
      <Box w="100%" bg="secondary">
        <Flex
          align="center"
          direction={{ base: 'column-reverse', md: 'row-reverse' }}
          py={20}
          px={6}
          maxW="1200px"
          w="100%"
          m="auto"
        >
          <Box mr={20} flex="1">
            <Heading size="2xl">
              Digitally hold{' '}
              <span style={{ color: '#1DE7C9' }}>Real world</span> ownership
            </Heading>
            <Text fontSize="xl" my={6}>
              Blockride is the infusion of blockchain technology into
              traditional transportation and share holding practices to increase
              efficiency, leverage cost, increase in reach and input, while
              creating a stream of passive income for holders amongst others.
            </Text>
            <Text color="primary.500">
              Basically, blockchain integration for Blockride is simply the
              enabler, not the driver!.
            </Text>
          </Box>
          <Box flex="1">
            <Image
              src="images/blockcoin.svg"
              alt=""
              p={[7, 6, 0]}
              w={['100%', '340px']}
            />
          </Box>
        </Flex>
      </Box>
      <Box
        w="100%"
        bg="white"
        bgImage={"url('images/bg_cubes.png')"}
        bgPosition="10%"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex
          align="center"
          direction={{ base: 'column-reverse', md: 'row' }}
          py={20}
          px={6}
          maxW="1200px"
          w="100%"
          m="auto"
        >
          <Box flex="1">
            <Heading size="2xl" color="secondary">
              BlockRide Mission
            </Heading>
            <Text fontSize="xl" my={6} color="black">
              The market for public transportation is rapidly growing all over
              the world, and setting up a standard bus-hailing company catering
              for investors returns without compromsing commuter’s comfort is
              therefore capital intensive.
            </Text>
            <Text color="black">
              Blockride is built to both cater for an essential daily activity
              (commuting) for most people while solving the underlying problems
              in the transportation system of our targeted markets. We are
              building a project that rewards holders without compromising the
              comfort of our users.
            </Text>
          </Box>
          <Center flex="1" m={[7, 6, 0]}>
            <Center bg="white" w={200}>
              <Image src="images/bus_top.webp" alt="" h={400} />
            </Center>
          </Center>
        </Flex>
      </Box>
    </>
  );
};

export default Content;
