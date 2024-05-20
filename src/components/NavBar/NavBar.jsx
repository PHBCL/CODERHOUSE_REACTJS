import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Heading
} from '@chakra-ui/react'
import { FaArrowDown } from "react-icons/fa";

const NavBar = () => {
  return (
    <Flex height={'20vh'} width={'100%'} justify={'space-between'} align={'center'} backgroundColor={'#DBD8F0'}>
      <Heading fontSize={'1x'} margin={2}>Logo</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaArrowDown />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  )
}

export default NavBar