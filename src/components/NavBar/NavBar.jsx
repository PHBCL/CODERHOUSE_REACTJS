import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Image,
  Link as ChakraLink
} from '@chakra-ui/react'
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <Flex height={'10vh'} width={'100%'} justify={'space-between'} align={'center'} backgroundColor={'general_color.powderblue'}>
      <ChakraLink as={Link} width={'30%'} to='/'>
          <Image w='30%' src={logo} />
      </ChakraLink> 
      <Menu>
        <MenuButton as={Button} rightIcon={<FaArrowDown />}>
          Categorias
        </MenuButton>
        <MenuList>
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

