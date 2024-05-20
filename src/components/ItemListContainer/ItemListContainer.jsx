import { Flex, Heading } from '@chakra-ui/react'
import './ItemListContainer.css'
const ItemListContainer = ({ titulo }) => {
  return (
    <Flex justify={'center'} align={'center'}>
        <Heading align={'center'} className='titulo'>{titulo}</Heading>
    </Flex>
  )
}

export default ItemListContainer