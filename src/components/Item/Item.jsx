import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Text, Button, Divider, Heading, Center, Flex, Badge } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({nombre, precio, stock, img, id, descripcion_corta,precio_real}) => {
  return (
    <Card maxW='sm' border='3px' borderColor='#243F4D' boxShadow='2xl'>

      <CardBody>
        <Image
          src={img}
          alt={nombre}
          borderRadius='md'
          boxSize='100%'
          objectFit='cover' 
          w={'300px'}
          h='300px' 
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
          <Heading size={'sm'}>{descripcion_corta}</Heading>
          <Text color='blue.600' fontSize='2xl'>
            ${precio}
            {
              precio_real > 0 && ( 1- (precio / precio_real) ) * 100 > 0 ?
                <Badge colorScheme='green' ml={'5px'}>{ (((precio / precio_real) * 100) - 100).toFixed(0) }% descuento</Badge>
              :<></>
            }
          </Text> 
          <Text color='blue.600' fontSize='2xl'>
            stock: {stock}
          </Text>
        </Stack>
      </CardBody>

      <Center height='2px' bg={'#243F4D'}></Center>
      <Divider color={'#243F4D'}  />


      <CardFooter>
        <Flex spacing='2' justifyContent={'center'} align={'center'} w={'100%'}>
          <Button 
            variant='solid' 
            bg={'#243F4D'} 
            color={'#fff'}
            _hover={{ bg: '#3E6478', color: '#fff' }}
            >
              <Link to={`/producto/${id}`}>
                Ver detalle
              </Link>
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default Item
