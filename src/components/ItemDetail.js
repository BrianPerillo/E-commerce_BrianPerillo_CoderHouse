import React, {Fragment, useState ,useEffect, useContext} from 'react';
import ItemCount from './ItemCount'
import {CartContext} from '../context/CartContext';
import {Link, NavLink} from 'react-router-dom';

const ItemDetail = (props) => {

    const cartContext = useContext(CartContext) //guardo context

    const item = props.item;

    // const [quantityToAdd, setQuantityToAdd] = useState(0);

    // function onAdd(quantity,){
    //     setQuantityToAdd(quantity);
    //     console.log("Cantidad desde el detail: " + quantityToAdd);
    // }
    
    console.log('cartcontext => ' + cartContext);

    // const handleOnClickRemove = (e) => {
    //     cartContext.removeFromCart(props.item.id)
    // }


    return ( 


        <Fragment>
            
            <div className="container">
                <h2>Prueba de vista detalle:</h2>
                <div className="row">

                    <div>
                        <img src={props.item.img} style={{width:"150px"}}/>
                    </div>

                    <div className="col ml-3">
                        <h4>{props.item.model}</h4>
                        <br></br>
                        <h6>Detalle:</h6>
                        <p>{props.item.description}</p>
                        <br></br>
                        <h4 style={{color:"orange"}}>{props.item.price}</h4>
                    </div>

                </div>
                
                {
                    cartContext.quantity == 0 ?

                        <div style={{width:"35%"}}>
                            {/* Cargo el ItemCount (hijo de este comp) y además: */}
                            {/* le paso función onAdd al hijo ItemCount, para tener el dato de quantity en este Comp padre */}
                            <ItemCount stock={props.item.stock} item={props.item} onAdd={cartContext.addCart}/>  {/* Paso funcion addToCart que viene desde el context*/} 
                        </div>

                    :

                        <div className="mt-5" style={{width:"35%"}}>
                            <NavLink to='/cart'><a className="btn btn-success" style={{width:"100%"}}>Terminar Compra</a></NavLink>
                            {/* <button href="/cart" className="btn btn-danger" onClick={handleOnClickRemove} style={{width:"100%"}}>Eliminar del Carrito</button> */}
                        </div>
                               
                                    
                }
                
                {
                    // cartContext.cart.map((item) => <p>items carrito =  {item.model} cantidad =  {cartContext.quantity}</p> )
                    
                }

            </div>

        </Fragment>

     );

}
 
export default ItemDetail;