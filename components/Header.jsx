import React from 'react';
import {
  Box,
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
} from '@chakra-ui/react';

import {
  FaChevronDown,
  FaChevronUp,
  FaDiscord,
  FaTwitter,
  FaBars,
} from 'react-icons/fa';

const Header = () => {
  const NavMenuItem = props => {
    return (
      <>
        {props.noDropdown ? (
          <Link
            marginRight={5}
            fontWeight={700}
            _hover={{ color: 'primary.500' }}
            href="/"
            fontFamily="Poppins, san-serif"
          >
            {props.menuName}
          </Link>
        ) : (
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  rightIcon={
                    isOpen ? (
                      <FaChevronUp style={{ color: '#1DE7C9' }} />
                    ) : (
                      <FaChevronDown style={{ color: '#1DE7C9' }} />
                    )
                  }
                  bg="inherit"
                  fontWeight={700}
                  colorScheme="primary"
                  _hover={{
                    cursor: 'pointer',
                    color: 'primary.500',
                  }}
                  _active={{
                    bg: 'whiteAlpha.400',
                    color: 'primary.500',
                  }}
                >
                  {props.menuName}
                </MenuButton>
                <MenuList color="black">
                  {props.menuList?.map((item, i) => {
                    return <MenuItem key={i}>{item}</MenuItem>;
                  })}
                </MenuList>
              </>
            )}
          </Menu>
        )}
      </>
    );
  };

  return (
    <Box w="100%" p="24px" py="32px">
      <Flex justify="space-between" align="center">
        <Link href="/">
          <Image src="images/logo.svg" alt="logo " />
        </Link>
        <Flex align="center">
          <Flex
            marginRight={20}
            align="center"
            display={['none', 'flex', 'flex']}
          >
            <NavMenuItem menuName="Home" noDropdown />
            <NavMenuItem menuName="Learn" menuList={['link', 'link']} />
            <NavMenuItem menuName="Earn" menuList={['link', 'link']} />
          </Flex>
          <Flex align="center">
            <Link
              href="/"
              marginRight={10}
              fontSize="1.5rem"
              color="primary.500"
              _hover={{ color: 'primary.600' }}
            >
              <FaDiscord />
            </Link>
            <Link
              href="/"
              marginRight={10}
              fontSize="1.5rem"
              color="primary.500"
              _hover={{ color: 'primary.600' }}
            >
              <FaTwitter />
            </Link>
          </Flex>
          <Button
            color="black"
            bg="primary.500"
            colorScheme="primary"
            px="24px"
            display={['none', 'none', 'flex']}
          >
            Stake
          </Button>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FaBars />}
              variant="outline"
              bg="inherit"
              colorScheme="primary"
              display={['flex', 'none', 'none']}
            />
            <MenuList color="black">
              <MenuItem>Home</MenuItem>
              <MenuItem>Learn</MenuItem>
              <MenuItem>Earn</MenuItem>
              <MenuItem>Stake</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
