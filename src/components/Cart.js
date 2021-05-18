import React, {Fragment, useContext, useState, useEffect} from 'react';
import {CartContext} from '../context/CartContext';

const Cart = () => {

    var quantity = 0;
    var price = 0;
    const [total_quantity, setTotal_quantity] = useState(0)
    const [total_price, setTotal_price] = useState(0)
    const cartContext = useContext(CartContext) //guardo context
    
    useEffect(() => {
        cartContext.cart.map((item) => {
            quantity = quantity + item.quantity
            price = price + (item.price * item.quantity)
        }            
    )
        setTotal_quantity(quantity)
        setTotal_price(price)
        console.log("carlogdesdeCart: " + cartContext.cart)
    }, [])
    
    const handleOnClickRemove = (e) => {
        cartContext.removeFromCart(e.target.value);
    }

    console.log("log de cart: " + cartContext.cart);

    return ( 
        
        <Fragment>
            
            <div>
            {
                    cartContext.cart.map((item) => 
                        <div className="row m-3">
                            <img src={item.img} style={{width:"100px"}}/>
                            <p>Producto: {item.model} - cantidad: {item.quantity} - precio: {item.price * item.quantity}</p>
                            <button value={item.id} className="btn btn-danger m-2" onClick={handleOnClickRemove} style={{width:"10%", height:"10%"}}>Eliminar del Carrito</button>
                        </div>
                    )
                    
                
            }
                
                <p className="mt-5">
                    Cantidad de items = {total_quantity}
                </p>

                <p>
                    Precio Total = {total_price} 
                </p>

               

            </div>
        </Fragment>

     );

}
 
export default Cart;