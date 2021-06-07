import React, {Fragment, useContext, useEffect, useState} from 'react';

import {CartContext} from '../context/CartContext';
import {db} from '../firebase';

const Cart = () => {

    var quantity = 0;
    var price = 0;
    const [total_quantity, setTotal_quantity] = useState(0)
    const [total_price, setTotal_price] = useState(0)
    const cartContext = useContext(CartContext) //guardo context
    const [finalizarCompraBool, setFinalizarCompra] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userName, setUserName] = useState('')
    const [orderId, setOrderId] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState(cartContext.cart)

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
    
    const finalizarCompra = () => {

        setFinalizarCompra(true)

    }

    const handleOnClickRemove = (e) => {
        cartContext.removeFromCart(e.target.value);
    }

    console.log("log de cart: " + cartContext.cart);

    const handleNameChange = event => {
        setUserName(event.target.value)
    };

    const handlePhoneChange = event => {
        setUserPhone(event.target.value)
      };

    const handleEmailChange = event => {
        setUserEmail(event.target.value)
      };

    const handleSubmit = e => {

        e.preventDefault();

        const userInfo = {
            userEmail,userName,userPhone
        }

        const orders =  db.collection("orders");

        const newOrder = {

            buyer: userInfo,

        }

        orders.add(newOrder).then(({id}) => {

            setOrderId(id); //SUCCESS
        }).catch(err => {
            setError(err); //ERROR
        }).finally(() => {
            setLoading(false);
        }) 

    }

    return ( 
        
        <Fragment>
            
            <div className="mt-5 d-flex justify-content-center">
            {       cartContext.cart[0] == null ?

                    <p>Aún no hay items en el carrito</p>
                    
                    :

                    <div className="col">
                    
                    <table id="cart_table" className="col-md-6" style={{margin:'auto'}}>
                        
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Eliminar Producto</th>
                        </tr>
                   
                        {
                            cartContext.cart.map((item) => 
                            
                                <tr className="cart_item"> 

                                    <td className="col-md-3">
                                        <img src={item.img} style={{width:"100px"}}/>
                                        <p>{item.model}</p>
                                    </td>

                                    <td className="col-md-3">
                                        <p>{item.quantity}</p>
                                    </td>                                   

                                    <td className="col-md-3">
                                        <p>{item.price * item.quantity}</p>
                                    </td> 
                                    
                                    <td className="col-md-3">
                                        <button value={item.id} className="btn btn-danger m-2" onClick={handleOnClickRemove}>Eliminar del Carrito</button>
                                    </td> 
                                    <hr></hr>
                                </tr>

                                

                             
                            )
                        }

                    </table>

                    <div className="mt-5 col-md-6" style={{margin:'auto'}}>

                        <p className="mt-5">
                                Cantidad de items = {total_quantity}
                            </p>

                            <p>
                                Precio Total = {total_price} 
                            </p>

                            <button className="btn btn-primary ml-2" onClick={finalizarCompra}>Finalizar Compra</button>

                    </div>

                            { 

                                finalizarCompraBool ?

                                <div className="col mt-5" style={{background:'rgb(211, 211, 211, 0.2)', height:'50vh'}}>
                                    <div className="col-md-6 col-lg-6 col-xl-3 text-center p-3" style={{margin:"0 auto"}}>
                                        <form className="mt-5 form-group" onSubmit={handleSubmit}>

                                            <label>Name</label><br></br>
                                            <input className="form-control" value={userName} name="name" type="text" onChange={handleNameChange}></input><br></br>

                                            <label>Phone</label><br></br>
                                            <input className="form-control" value={userPhone} name="phone" type="tel" onChange={handlePhoneChange}></input><br></br>

                                            <label>Email</label><br></br>
                                            <input className="form-control" value={userEmail} name="email" type="email" onChange={handleEmailChange}></input><br></br>

                                            <button className="btn btn-success mt-2" type="submit">Comprar</button>

                                        </form>
                                    </div>
                                </div>
                            
                            : 

                                <form>

                                </form>

                            }
                            
                    

                    </div>  
                
            }

            </div>
        </Fragment>

     );

}
 
export default Cart;