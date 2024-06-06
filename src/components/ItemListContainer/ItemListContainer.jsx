import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { BarLoader } from 'react-spinners'

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading] = useState(true)
  const { categoryId } = useParams()
  
  useEffect(() => {
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()
    setLoading(true)

    dataProductos
    .then((data) => setProducts(data))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  },[categoryId])

  return (
    <Flex direction={'column'} justify={'center'} align={'center'}> 
      <Heading color={'#FCD7B6'} mt={10}>{title}</Heading>
      {
        loading ?
        <BarLoader color="#36d7b7" />
        :
        <ItemList products={products} />
      }
      
    </Flex>
  )
}

export default ItemListContainer
