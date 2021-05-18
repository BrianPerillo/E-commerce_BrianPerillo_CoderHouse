import {createContext, useState, useEffect} from 'react'


export const CartContext = createContext([]);  //Creo un contexto y lo exporto

export const CartProvider = ({children}) => {  //Creo proveedor que recive datos (children), y lo exporto

  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)

  const addCart = (quantity_recibida, item) => {
    item.quantity = quantity_recibida;
    setCart([...cart, item]) 
    console.log("carrito " + cart)
  }

  const removeFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId)
    setCart(newCart)
    console.log("id_recibido" + itemId)
  }

  return (

    <CartContext.Provider value={{cart, addCart, removeFromCart, quantity}}>
      {children}
    </CartContext.Provider>



  )

}

