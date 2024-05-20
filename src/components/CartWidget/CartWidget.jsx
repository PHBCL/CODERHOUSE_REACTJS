import React from 'react'
import { Flex } from '@chakra-ui/react';
import { HiShoppingCart } from "react-icons/hi";

const CartWidget = () => {
  return (
    <Flex margin={2} justify={'center'}>
      <HiShoppingCart />
    </Flex>
  )
}

export default CartWidget