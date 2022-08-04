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
} from '@chakra-ui/react';

import {
  FaChevronDown,
  FaChevronUp,
  FaDiscord,
  FaTwitter,
} from 'react-icons/fa';

import logo from '../public/images/logo.svg';
import Image from 'next/image';

const Header = () => {
  const NavMenuItem = props => {
    return (
      <>
        {props.noDropdown ? (
          <Link
            marginRight={10}
            fontWeight={700}
            _hover={{ color: 'primary' }}
            href="/"
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
                  _hover={{ cursor: 'pointer', color: 'primary' }}
                  _active={{ bg: 'whiteAlpha.400', color: 'primary' }}
                >
                  {props.menuName} &nbsp;
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
        <Box>
          <Image src={logo} alt="logo " />
        </Box>
        <Flex align="center">
          <Flex marginRight={20} align="center">
            <NavMenuItem menuName="Home" noDropdown />
            <NavMenuItem menuName="Learn" menuList={['link', 'link']} />
            <NavMenuItem menuName="Earn" menuList={['link', 'link']} />
          </Flex>
          <Flex align="center">
            <Link
              href="/"
              marginRight={10}
              fontSize="1.5rem"
              color="primary"
              _hover={{ color: 'inherit' }}
            >
              <FaDiscord />
            </Link>
            <Link
              href="/"
              marginRight={10}
              fontSize="1.5rem"
              color="primary"
              _hover={{ color: 'inherit' }}
            >
              <FaTwitter />
            </Link>
          </Flex>
          <Button color="black" bg="primary" px="24px" _hover={{ bg: 'white' }}>
            Stake
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
