import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext([]);  //Creo un contexto y lo exporto

export const CartProvider = ({children}) => {  //Creo proveedor que recive datos (children), y lo exporto

  const [cart, setCart] = useState([])
  const [itemRemove, setItemRemove] = useState({})
  const [quantity, setQuantity] = useState(0)
  const [lastOrderId, setLastOrderId] = useState()


  const addCart = (quantity_recibida, item) => {
    item.quantity = quantity_recibida;
    setCart([...cart, item]) 
    console.log("carrito " + cart)
  }

  
  const removeCart = () => {

        setCart([]);

}

  
  const orderId = (orderId) => {

    setLastOrderId(orderId);
    // console.log("id desde context" + lastOrderId);

  }

  const removeFromCart = (itemId) => {

    console.log("cart: " + cart);

        const newCart = cart.filter(item => item.id != itemId);
        setCart(newCart) 
        //setItemRemove(cart.indexOf(item));
    
      
 

    console.log("newCart" + newCart);
    
    //setCart(cart.splice(itemRemove));

    

    


//
    

    // const newCart = cart.filter(function(item){

    //   return item !== itemId;
      
    // })

    // setCart(newCart)
    // // newCart.map((item)=> console.log("id item cart: " + item.id + " id_recibido: " + itemId))
    // console.log("newCart" + newCart);

    

  }

  return (

    <CartContext.Provider value={{cart, addCart, removeFromCart, removeCart, orderId, quantity}}>
      {children}
    </CartContext.Provider>



  )

}

