import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { FaChevronRight, FaDiscord } from 'react-icons/fa';
import threeCube from '../public/images/threeCube.webp';

export default function Hero() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 16, md: 10 }}
        py={{ base: 20, md: 40 }}
        px={6}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              color="primary.500"
              // fontSize="2.675rem"
              size="xl"
              fontWeight="900"
            >
              Hello...
            </Text>
            <br />
            <Text as={'span'} fontWeight="900">
              BlockRiDE
            </Text>
          </Heading>
          <Text color="primary.500" fontSize="xl">
            Exploring the possibilities of blockchain technology through
            transportation.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              rightIcon={<FaChevronRight />}
              colorScheme="primary"
              variant="outline"
              bg={'inherit'}
            >
              Read more...
            </Button>
          </Stack>
        </Stack>
        <Box flex="1" position="relative">
          <Image
            src="images/circle.svg"
            alt=""
            position="absolute"
            top="-28px"
            right="-28px"
          />
          <Image
            src="images/circle.svg"
            alt=""
            w={42}
            position="absolute"
            bottom="-21px"
            left="-21px"
          />

          <Box
            border="1px"
            borderColor="whiteAlpha.400"
            borderRadius="2xl"
            p={3}
            sx={{
              backgroundColor: 'transparent',
              backdropFilter: 'blur(10px)',
            }}
            position="relative"
          >
            <Flex pt={8} pb={4}>
              <Image src="images/logo_moonpay.svg" alt="" />
            </Flex>
            <Box bg="primary.200" color="black" py={5} px={9} borderRadius="xl">
              <Heading size="lg">3 reasons why NFTs will go phygital</Heading>
              <Text my={3} size="sm">
                More and more, NFTs will begin to integrate both physical and
                digital elements.
              </Text>
              <Text size="sm">
                As technology develops, and everything from news consumption and
                dating to interplanetary exploration is digitized, we’ll begin
                to see the real world and the digital world synchronize in new
                and interesting ways.
              </Text>
              <Text my={3} size="sm">
                “Phygital” is one way to describe this interplay.
              </Text>
              <Button
                fontWeight={'normal'}
                mt={3}
                px={3}
                size="lg"
                rightIcon={<FaChevronRight />}
                colorScheme="black"
                variant="outline"
                bg={'inherit'}
                borderRadius="full"
              >
                Read more...
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
      <Box>
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          py={32}
          px={6}
          bgImage={"url('images/bg_ellipse.png')"}
          bgPosition="top"
          bgRepeat="no-repeat"
          bgSize="cover"
          border="2px"
          sx={{
            borderStyle: 'solid',
            borderImage: `linear-gradient(
              to right,
              transparent 15%,
              #1DE7C9 50%,
              transparent 85%
            )
            1 10%`,
            borderImageWidth: '2px 0 0 0',
          }}
        >
          <Box flex="2" mr={5}>
            <Heading size="2xl">
              Next generation{' '}
              <span style={{ color: '#1DE7C9' }}>transportation</span> and share
              holding practices
            </Heading>
            <Text fontSize="xl" my={6}>
              Join the community of the great innovators getting ready to
              domainate the automobile market place through NFT.
            </Text>
            <Flex>
              <Button colorScheme="primary" color="black" marginRight="20px">
                <FaDiscord fontSize="1.5rem" /> &nbsp; Ready?
              </Button>
              <Button colorScheme="primary" variant="outline">
                Learn more
              </Button>
            </Flex>
          </Box>
          <Box flex="1">
            <Image
              src="images/threeCube.webp"
              alt=""
              p={[7, 6, 0]}
              w={['100%', '300px']}
            />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
