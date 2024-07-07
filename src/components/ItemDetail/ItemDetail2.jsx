import { Flex, Grid, GridItem , Image} from '@chakra-ui/react'
import React from 'react'

const ItemDetail2 = ({categoria, descripcion, img, nombre, precio, id, stock}) => {
  return (
    <Flex w={'90vw'} h={'100vh'} m={'10'} justify={'center'}>
        <Grid
        w={'100vw'}
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={10}
    >
        <GridItem colSpan={2} bg='tomato'>
            <Image
                  objectFit='cover'
                  src={img}
                  alt={nombre}
                  borderRadius='md'
                  boxSize='100%'
                  w={'400px'}
                  h='400px' 
              />
        </GridItem>
        <GridItem colSpan={3} bg='tomato'>
            {nombre}
        </GridItem>
    </Grid>
    </Flex>
  )
}

export default ItemDetail2