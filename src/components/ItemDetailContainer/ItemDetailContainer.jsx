import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'
import { RiseLoader} from 'react-spinners'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext'

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()
    const {currentQuantity} = useContext(Context)

    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const queryRef = doc(db, 'productos', productId)
            const response = await getDoc(queryRef)
            if (!response.exists()) {
                // Si no se encuentra el documento, redirige
                navigate('/page_not_found'); // Ajusta esto a la ruta a la que quieres redirigir
                return;
            }
            const newItem = {
                ...response.data(),
                id: response.id
            }
            setProducto(newItem)
            setLoading(false)
        }
        getData()
    },[])

    return (
        <>
              {
                loading ? 
                <Flex justify={'center'} align={'center'} h={'90vh'}>
                    <RiseLoader color="#36d7b7" />            
                </Flex>
                : 
                <>
                <Flex justify={'center'} align={'center'} h={'120vh'}>
                    <ItemDetail {...producto} currentQuantity ={currentQuantity(productId)}/>
                </Flex>
                </>
            }
        </>
    )
}

export default ItemDetailContainer
