import React, { useContext, useState } from 'react'
import Context from '../../context/CartContext'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Flex,
    Center,
    Heading,
    Button,

  } from '@chakra-ui/react'
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Steps from '../Cart/Steps'


const Checkout = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })
    const [ error, setError ] = useState({})
    const [ loading, setLoading ] = useState(false)

    const { cart, getTotal, clearCart, cartResume } = useContext(Context)
    const navigate = useNavigate()
    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if(!user.name) {
            errors.name = 'Tenés que agregar un nombre' 
        }else if(user.name.length < 4) {
            errors.name = 'El nombre debe tener al menos 4 caracteres'
        }
        
        if(!user.email){
            errors.email = 'Tenés que agregar un email'
        }else if(!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'El email no es válido'
        }

        if(!user.repeatedEmail){
            errors.repeatedEmail = 'Tenés que repetir el email'
        }else if(user.email !== user.repeatedEmail) {
            errors.repeatedEmail = 'Los emails no coinciden'
        }

        if(!user.phone){
            errors.phone = 'Tenés que agregar un numero de telefono'
        }else if(user.phone.length < 8) {
            errors.phone = 'El numero de teléfono debe tener al menos 8 caracteres'
        }


        setError(errors)
        return Object.keys(errors).length === 0

    }

    const getOrder = async () => {
        if(!validateForm()){
            return
        }

        if(cart.length === 0){
            Swal.fire({
                text: "El carrito esta vacio.",
                imageUrl: "https://plus.unsplash.com/premium_vector-1707577770182-a2513199d14e?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imageWidth: 200,
                imageHeight: 400
              });
              return
        }

        const coleccion = collection(db, 'orders')
        try {
            for(const item of cart){
                const docRef = doc(db, 'productos', item.id)
                const productDoc = await getDoc(docRef)
                const currentStock = productDoc.data().stock
                if(currentStock >= item.quantity){
                    await updateDoc(docRef, {
                        stock: currentStock - item.quantity
                    })

                    const order = {
                        buyer: user,
                        cart: cart,
                        total: getTotal(),
                        fecha: Timestamp.now()
                    }
        
                    const orderRef = await addDoc(coleccion, order)
        
                    Swal.fire({
                        title: "Gracias por tu compra",
                        text: `El número de orden es: ${orderRef.id}`,
                        icon: "success",
                        confirmButtonText: "Ir Pagina confirmacion",
                      }).then(() => {
                         cartResume(orderRef.id, cart)
                         clearCart()
                         navigate('/resumeOrder')
                      });

                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "No Hay Stock Suficiente :( "
                      });
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
    <Flex ml={'70vh'} align={'center'}>
          <Steps actualStep={2}  />
        </Flex>
    
    <Center mt={10}>
        
        <Flex direction={'column'} align={'center'} justify={'center'}>
            <Heading>Datos de facturación</Heading>
            <Flex w={'100%'} justify={'center'} align={'center'}>
                <FormControl w={'100%'} isInvalid={Object.keys(error).length > 0 }>
                    <FormLabel>Nombre</FormLabel>
                    <Input 
                        type='text' 
                        name='name'
                        placeholder='Germán Piccoli'
                        onChange={updateUser}
                        />
                    <FormErrorMessage>{error.name}</FormErrorMessage>
                    <FormLabel>Email</FormLabel>
                    <Input 
                        type='email' 
                        name='email'
                        placeholder='Germánpiccoli@coderhouse.com'
                        onChange={updateUser}
                        />
                    <FormErrorMessage>{error.email}</FormErrorMessage>
                    <FormLabel>Repetir email</FormLabel>
                    <Input 
                        type='email' 
                        name='repeatedEmail'
                        placeholder='Germánpiccoli@coderhouse.com'
                        onChange={updateUser}
                        />
                    <FormErrorMessage>{error.repeatedEmail}</FormErrorMessage>
                    <FormLabel>Teléfono</FormLabel>
                    <Input 
                        type='text' 
                        name='phone'
                        placeholder='11223344'
                        onChange={updateUser}
                        />
                    <FormErrorMessage>{error.phone}</FormErrorMessage>
                </FormControl>
            </Flex>
            <Button mt={5} onClick={getOrder}>
                Finalizar compra
            </Button>
        </Flex>
    </Center>

    
    </>
  )
}

export default Checkout
