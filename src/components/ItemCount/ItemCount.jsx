import React, { useState } from 'react'
import { Button, Flex } from '@chakra-ui/react'

const ItemCount = ({stock, valorInicial, onAdd}) => {
    const [ count, setCount ] = useState(valorInicial)
    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > 1 && setCount(count - 1)
    }

  return (
    <Flex>
        <Button colorScheme='blue'onClick={decrementar}>-</Button>
        {count}
        <Button colorScheme='blue' onClick={incrementar}>+</Button>
        <Button colorScheme='blue' onClick={() => onAdd(count)}>Agregar al Carro</Button>
    </Flex>
  )
}

export default ItemCount
