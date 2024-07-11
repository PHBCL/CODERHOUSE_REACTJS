import React, { createContext, useState } from 'react'

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])
    const [ resumeCart, setResumeCart ] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newItem = {
            ...productToAdd,
            quantity
        }
        if(isInCart(newItem.id)) {
            const updatedCart = cart.map((prod) => {
                if(prod.id === newItem.id) {
                    return { ...prod, quantity: prod.quantity + newItem.quantity }
                }
                return prod
            })
            setCart(updatedCart)
        }else {
        setCart([...cart, newItem])
        }
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const removeItem = (id) => {
        const updatedCart = cart.filter((prod) => prod.id !== id)
        setCart([...updatedCart])
    }
    const clearCart = () => {
        setCart([])
    }
    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
    }
    const getQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const decrementarItem = (id) => {
        const updatedCart = cart.map((prod) => {
            if(prod.id === id){
                const newQuantity = Math.max(prod.quantity -1, 1) //reduzco sin pasar el 1 al ser el min
                return {...prod, quantity: newQuantity}
            }
            return prod
        })
        setCart(updatedCart)
    } 

    
    const incrementarItem = (id, stock) => {
        const updatedCart = cart.map((prod) => {
            if(prod.id === id){
                const newQuantity = Math.min(prod.quantity + 1, stock) // el limite sera el stock del producto
                return {...prod, quantity: newQuantity}
            }
            return prod
        })
        setCart(updatedCart)
    } 

    const currentQuantity = (id) => {
        const prod = cart.find((item) => item.id === id)
        return prod ? prod.quantity : 0
    }


    const cartResume = (codigoReferencia) => {
        setResumeCart({ codigoReferencia, cart: [...cart] });
    }

    const clearResumeCart = () => {
        setResumeCart([])
    }

  return (
    <Context.Provider 
        value={{
            cart,
            resumeCart,
            setCart,
            addItem,
            removeItem, 
            clearCart,
            getTotal,
            getQuantity,
            decrementarItem,
            incrementarItem,
            currentQuantity,
            cartResume,
            clearResumeCart
        }}>
            {children}
    </Context.Provider>

  )
}

export default Context

