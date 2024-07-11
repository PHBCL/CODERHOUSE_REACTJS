import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Heading,
    Text,
    Button
  } from '@chakra-ui/react'
  import {Link, Navigate, useNavigate } from 'react-router-dom'
  import { NumericFormat } from 'react-number-format';
import Steps from './../Cart/Steps';
  

const ResumeOrder = () => {
    const { resumeCart, clearResumeCart} = useContext(Context)
    const navigate = useNavigate()
    console.log(resumeCart)
    console.log(resumeCart.cart)
    return (
    <>
    <Flex ml={'70vh'} align={'center'}>
          <Steps actualStep={3}  />
    </Flex>
    <Flex w={'70%'} ml={'80vh'} mt={'10vh'}>
        <Text>Codigo de Referencia: {resumeCart.codigoReferencia}</Text>
    </Flex>
    <Flex w={'70%'} ml={'75vh'} mt={'2vh'} >
        <TableContainer >
        <Table variant='striped' colorScheme='teal' >
            <Thead>
            <Tr>
                <Th>Nombre</Th>
                <Th>Cantidad</Th>
                <Th>Precio</Th>
                <Th>Subtotal</Th>
            </Tr>
            </Thead>
            <Tbody>
                {
                    resumeCart.cart === undefined || resumeCart.length === 0 ? navigate('/'):
                    resumeCart.cart.map((prod) => (
                        <Tr key={prod.id}>
                            <Td>{prod.nombre}</Td>
                            <Td>{prod.quantity}</Td>
                            <Td>$<NumericFormat value={prod.precio} displayType={'text'} thousandSeparator/></Td>
                            <Td>$<NumericFormat value={prod.precio * prod.quantity} displayType={'text'} thousandSeparator/> </Td>
                    </Tr>
                    ))
            }
            </Tbody>
        </Table>
        </TableContainer>
    </Flex>
    <Flex  w={'100%'} ml={'90vh'} mt={'5vh'}>
        <Button color={'green'}><Link to={"/"}>Ir al sitio principal</Link></Button>
    </Flex>
    </>
  )
}


export default ResumeOrder
