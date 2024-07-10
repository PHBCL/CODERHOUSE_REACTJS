import { Badge, Box, Button, Flex, Grid, GridItem , Image, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import ItemCount from '../ItemCount/ItemCount';
import Context from '../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';

const ItemDetail = ({precio_real, categoria, descripcion, img, nombre, precio, id, stock, currentQuantity}) => {
  const [ cantidad, setCantidad ] = useState(0)
  const { addItem } = useContext(Context)
  const maxAvailable = stock - currentQuantity

  const onAdd = (quantity) => {   
      addItem({id,nombre,precio,img,stock}, quantity)
      toast(`Agregaste ${quantity} unidades`)
      setCantidad(quantity)
  }


  return (
    <Flex w={'50vw'} h={'90vh'} m={'10'} justify={'center'} >
        <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={3}>
          <GridItem colSpan={2} >
              <Box boxShadow='md' rounded='lg'>
                <Image
                      objectFit='cover'
                      src={img}
                      alt={nombre}
                      borderRadius='md'
                      p={'15%'}
                      mt={'15%'}
                      mr={'15%'}
                  />
              </Box>
          </GridItem>

          <GridItem colSpan={3} >
              <Flex m={'5%'}>
                    <Text fontSize='3xl' align={'left'} >
                      {nombre}
                    </Text>
              </Flex>
              <Flex m={'5%'}>
                  <Badge colorScheme='blue'>{categoria}</Badge>
              </Flex>
              <Flex m={'5%'} mt={'5%'}>
                    <Text fontSize='l' align={'left'} color={'grey'}>
                      {descripcion}
                    </Text>
              </Flex>
              <Flex ml={'5%'} >
                    <Text fontSize='xl' align={'left'} color={'black'}>
                       Precio: $<NumericFormat value={precio} displayType={'text'} thousandSeparator/>
                    </Text>
                  { precio_real > 0 ?
                    <Text fontSize='m' color={'lightgray'} pt={'3px'} ml={'7px'} as='s'>
                       $<NumericFormat value={precio} displayType={'text'} thousandSeparator/>
                    </Text> : <Box></Box>
                  }
              </Flex>
              <Flex ml={'5%'} >
                    <Text fontSize='xl' align={'left'} color={'black'}>
                       Stock: {stock}
                    </Text>
              </Flex>
              <Flex ml={'5%'} >
                    <Text fontSize='xl' align={'left'} color={'black'}>
                       Agregado al Carro: {currentQuantity}
                    </Text>
              </Flex>
              {
                cantidad > 0 ?
                <Flex justify={'space-between'} align={'center'} w={'60%'} ml={'5%'}>
                  <Button
                      bg={'#AD886E'} 
                      color={'#243F4D'}
                      w={'100%'}
                      h={'5vh'}
                      mt={11}
                      mr={3}
                      borderRadius={0}
                      _hover={{ bg: '#ECCDB7', color: '#243F4D' }}>
                              <Link as={Link} to='/cart'>Ir al carrito</Link> 
                  </Button>
                  <Button 
                      bg={'#AD886E'} 
                      color={'#243F4D'}
                      w={'100%'}
                      h={'5vh'}
                      mt={11}
                      borderRadius={0}
                      _hover={{ bg: '#ECCDB7', color: '#243F4D' }}>
                      <Link to='/'>Seguir comprando</Link> 
                  </Button>
              </Flex>:
              <Flex>
                  <ItemCount stock={stock} initialValue={1} onAdd={onAdd} maxAvailable={maxAvailable} />
              </Flex>
              }
          </GridItem>
    </Grid>
    <ToastContainer />
    </Flex>
     
  )
}

export default ItemDetail