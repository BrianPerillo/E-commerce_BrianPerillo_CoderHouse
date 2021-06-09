import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext([]);  //Creo un contexto y lo exporto

export const CartProvider = ({children}) => {  //Creo proveedor que recive datos (children), y lo exporto

  const [cart, setCart] = useState([])
  const [itemRemove, setItemRemove] = useState({})
  const [quantity, setQuantity] = useState(0)
  // const [isInCartBool, setIsInCartBool] = useState(false)


  const addCart = (quantity_recibida, item) => {
    
      item.quantity = quantity_recibida;
      setCart([...cart, item]) 
      console.log("carrito " + cart)

  }

  const isInCart = (quantity_recibida, item) => {
    
    if(cart.length>0){

      cart.map((cart_item) => {
      
        console.log("ID CART " + cart_item.id); 
        console.log("ID CART " + item.id);
  
        if(cart_item.id == item.id){
  
          cart_item.quantity = cart_item.quantity + quantity_recibida
  
        }
        else{
  
          addCart(quantity_recibida, item);
  
        }
  
        
  
      })
    }

    else{
      addCart(quantity_recibida, item);
    }


  

  }
  
  const removeCart = () => {

        setCart([]);

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

    <CartContext.Provider value={{cart, addCart, removeFromCart, removeCart, isInCart, quantity}}>
      {children}
    </CartContext.Provider>



  )

}

