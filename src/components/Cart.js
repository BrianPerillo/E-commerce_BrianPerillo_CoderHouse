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
    const [userEmailConfirm, setUserEmailConfirm] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userName, setUserName] = useState('')
    const [orderId, setOrderId] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState(cartContext.cart)
    const [orders, setOrders] = useState([])
    const [lastOrder, setLastOrder] = useState()
    const [lastOrderId, setLastOrderId] = useState()
    const [existOrder, setExistOrder] = useState(false)
    const [contenido, setContenido] = useState()
    const [errorMessage, setErrorMessage] = useState('')

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

    // console.log("log de cart: " + cartContext.cart);

    const handleNameChange = event => {
        setUserName(event.target.value)
    };

    const handlePhoneChange = event => {
        setUserPhone(event.target.value)
      };

    const handleEmailChange = event => {
        setUserEmail(event.target.value)
      };

    const handleEmailChangeConfirm = event => {
        setUserEmailConfirm(event.target.value)
    };

    const handleSubmit = e => {

        e.preventDefault();
        
        console.log('email: ' + userEmail);
        console.log('emailConfirm: ' + userEmailConfirm);

        const userInfo = {
            userEmail,userName,userPhone
        }

        //Si coinciden los emails: 

        if(userEmail == userEmailConfirm){

            const orders =  db.collection("orders");

            const newOrder = {
                buyer: userInfo,
                order: cartContext.cart
            }
    
            orders.add(newOrder).then(({id}) => {
    
                setOrderId(id); //SUCCESS
            }).catch(err => {
                setError(err); //ERROR
            }).finally(() => {
                setLoading(false);
            })
    
            //Traigo orden 
    
            db.collection('orders').onSnapshot((querySnapshot) => {
                
                querySnapshot.forEach((doc) => {
                  var order = doc.data()
                  var orderId = doc.id;
                  setOrders((orders) => orders.concat(order))
                  console.log("LOG ORDER FOREACH" + order.buyer.userName);
                  console.log("ORDER ID: " + orderId);
                  // cartContext.orderId(orderId);
                  setLastOrderId(orderId)
                });
                // console.log("last_order: " + orders);
                // setLastOrder(orders.pop());
    
                // setLastOrderId(orderId);
                
                
                // console.log("OREDER ID: " + orderId);
                setLoading(false)
               });
       
               setFinalizarCompra(false);
               setExistOrder(true);
               
                cartContext.removeCart();
               
               
               console.log("//////////////////////////////////");
               // console.log("last order: " + lastOrder.buyer.userName);
              //   console.log("last order ID: " + orderId);
       
        }

        //Si no coinciden

        else{

            setErrorMessage("Los emails no coinciden")

        }


        
        // if(cartContext.cart[0] != null){
        //     console.log("log del form submit" + cartContext.cart[0].img);
        // }
        // else{
        //     console.log("no hay items");
        // }

        

    }

    // const handleOnClickGetOrder = async () => {

    //     db.collection('orders').onSnapshot((querySnapshot) => {
            
    //      querySnapshot.forEach((doc) => {
    //        var order = doc.data()
    //        console.log(order);
    //        setOrders((orders) => orders.concat(order))
    //      });
    //      setLastOrder(orders.pop());
    //      setLastOrderId(orderId);
    //      setLoading(false)
    //     });

    //     setFinalizarCompra(false);
    //     setExistOrder(true);
        
    //     // cartContext.removeCart();

    //     console.log("//////////////////////////////////");
    //     // console.log("last order: " + lastOrder.buyer.userName);
    //     console.log("last order ID: " + orderId);

    //    } 

    return ( 
        
        <Fragment>
            
            <div className="container mt-5 d-flex justify-content-center">
            {       cartContext.cart[0] == null ?

                    <div>
                        <p>Aún no hay items en el carrito</p>
                        <div className="mt-5">
                            <p>ID de tu última compra:</p>
                            <p>{lastOrderId}</p>
                        </div>
                    </div>
                    
                    :

                    <div className="col">
                    <p>{lastOrderId}</p>
                    <table id="cart_table" className="col">
                        
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

                    <p className="mt-5">
                            Cantidad de items = {total_quantity}
                        </p>

                        <p>
                            Precio Total = {total_price} 
                        </p>

                        <button className="btn btn-primary ml-2" onClick={finalizarCompra}>Finalizar Compra</button>

                        { 

                            finalizarCompraBool ?

                            <div className="col mt-5" style={{height:'50vh'}}>
                                <h3 style={{color:'gray'}}>Formulario de Compra</h3>
                                <div className="col-md-6 col-lg-6 col-xl-3 text-center p-3" style={{margin:"0 auto"}}>
                                    <form className="mt-5 form-group" onSubmit={handleSubmit}>

                                        <label>Name</label><br></br>
                                        <input className="form-control" value={userName} name="name" type="text" onChange={handleNameChange}></input><br></br>

                                        <label>Phone</label><br></br>
                                        <input className="form-control" value={userPhone} name="phone" type="tel" onChange={handlePhoneChange}></input><br></br>

                                        <label>Email</label><br></br>
                                        <input className="form-control" value={userEmail} name="email" type="email" onChange={handleEmailChange}></input><br></br>

                                        <label>Confirmar Email</label><br></br>
                                        <input className="form-control" value={userEmailConfirm} name="email2" type="email" onChange={handleEmailChangeConfirm}></input><br></br>
                                        <p>{errorMessage}</p>

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