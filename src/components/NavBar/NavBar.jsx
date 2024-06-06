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
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex height={'10vh'} width={'100%'} justify={'space-between'} align={'center'} backgroundColor={'general_color.powderblue'}>
      <Heading fontSize={'1x'} margin={2}>Logo</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaArrowDown />}>
          Categorias
        </MenuButton>
        <MenuList>
                <MenuItem>
                  <Link to={'/'}>Todas</Link>
                </MenuItem>

                <MenuItem>
                  <Link to={'/categorias/Remeras'}>Remeras</Link>
                </MenuItem>
                
                <MenuItem>
                  <Link to={'/categorias/Buzos'}>Buzos</Link>
                </MenuItem>

                <MenuItem>
                  <Link to={'/categorias/Pijamas'}>Pijamas</Link>
                </MenuItem>

                <MenuItem>
                  <Link to={'/categorias/Zapatillas'}>Zapatillas</Link>
                </MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  )
}

export default NavBar

