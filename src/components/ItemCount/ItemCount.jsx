import React, { useState } from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import './ItemCount.css'

const ItemCount = ({stock, initialValue, onAdd}) => {
    const [ count, setCount ] = useState(initialValue)
    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > initialValue && setCount(count - 1)
    }

  return (
    <Flex m={5} ml={6} >
        <Box className='counterContainer'>
          <Button         
            bg={'#243F4D'} 
            color={'#fff'}
            _hover={{ bg: '#3E6478', color: '#fff' }} 
            className='btnCounter'  
            onClick={decrementar}>
              -
          </Button>
          <Heading p={2}>{count}</Heading>
          <Button         
            bg={'#243F4D'} 
            color={'#fff'}
            _hover={{ bg: '#3E6478', color: '#fff' }}
            className='btnCounter'  
            onClick={incrementar}>
              +
          </Button>
        </Box>
        <Box ml={5} mt={2}>
            <Button 
            bg={'#243F4D'} 
            color={'#fff'}
            borderRadius={50}
            _hover={{ bg: '#3E6478', color: '#fff' }} 
            onClick={() => onAdd(count)}
              >Agregar al carrito
            </Button>
        </Box>
   </Flex>
  )
}

export default ItemCount
