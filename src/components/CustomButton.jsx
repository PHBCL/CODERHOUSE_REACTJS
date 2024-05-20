import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'

const CustomButton = ({color, onClickCallback, style, disabled, children}) => {    
  const [background, setBackground] = useState(color)
  const handleClick = () => {
        onClickCallback && onClickCallback() // si onClickCallback es true, ejecuta la funcion ( if )
        setBackground("#DBD8F0")
  }

  return (
    <div>
        <Button 
            style={{background, ...style}}
            onClick={handleClick}
            disabled={disabled}>{children}</Button>
    </div>
  )
}

export default CustomButton