import { Badge, Box, Flex, Grid, GridItem , Image, Text} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import ItemCount from '../ItemCount/ItemCount';
import Context from '../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';

const ItemDetail2 = ({precio_real, categoria, descripcion, img, nombre, precio, id, stock}) => {
  const [ cantidad, setCantidad ] = useState(0)
  const { addItem } = useContext(Context)


  const onAdd = (quantity) => {   
      addItem({id,nombre,precio,img}, quantity)
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
                      boxSize='70%'
                      ml={'15%'}
                      mt={'15%'}
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
              <Flex m={'5%'} >
                    <Text fontSize='xl' align={'left'} color={'black'}>
                       $<NumericFormat value={precio} displayType={'text'} thousandSeparator/>
                    </Text>
                  { precio_real > 0 ?
                    <Text fontSize='m' color={'lightgray'} pt={'3px'} ml={'7px'} as='s'>
                       $<NumericFormat value={precio} displayType={'text'} thousandSeparator/>
                    </Text> : <Box></Box>
                  }
              </Flex>
              <Flex>
                  <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
              </Flex>

          </GridItem>
    </Grid>
    <ToastContainer />
    </Flex>
     
  )
}

export default ItemDetail2