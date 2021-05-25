import React, {Fragment, useContext, useState, useEffect} from 'react';
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
            
            <div>
            {       cartContext.cart[0] == null ?

                    <p>Aún no hay items en el carrito</p>
                    
                    :
                    
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

                    <button className="btn btn-primary ml-2" onClick={finalizarCompra}>Finalizar Compra</button>

                   { 

                        finalizarCompraBool ?

                        <div className="col-md-2 text-center" style={{margin:"0 auto"}}>
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