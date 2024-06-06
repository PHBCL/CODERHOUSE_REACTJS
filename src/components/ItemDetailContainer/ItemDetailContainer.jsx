import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BarLoader } from 'react-spinners'
import { getProductsById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'

const ItemDetailContainer = () => {
  const [ producto, setProducto ] = useState({})
  const [ loading, setLoading ] = useState(true)
  const { productId } = useParams()

  useEffect(() => {
    setLoading(true)

    getProductsById(productId)
    .then((data) => {
        console.log(data)
        setProducto(data)})
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  },[productId])


  return (
    <Flex direction={'column'} justify={'center'} align={'center'}> 
      {
        loading ?
        <BarLoader color="#36d7b7" />
        :
        <ItemDetail {...producto} />
      }
      
    </Flex>
  )
}

export default ItemDetailContainer