import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { toast , ToastContainer} from 'react-toastify'


const ItemDetail = ({ nombre, stock }) => {
  const onAdd = (cantidad) => {
    toast(`Agregaste ${cantidad} unidades`)
  }

  return (
    <div>
        nombre: { nombre }
        <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
        <ToastContainer autoClose={1000} />
    </div>
  )
}

export default ItemDetail