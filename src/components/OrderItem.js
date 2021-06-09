import {Link, NavLink} from 'react-router-dom';
import React, {Fragment, useContext, useEffect, useState} from 'react';

import {CartContext} from '../context/CartContext';
import {db} from '../firebase';

const Order = (props) => {

    const [order, setOrder] = useState([])
    const [trajoDatos, setTrajoDatos] = useState(false);
    
    useEffect(() => {

        let pedidoOrder = new Promise((resolve, reject)=>{

            setTimeout(()=> {
                const order = props.order
                resolve(order) 
                console.log("sssss" + order[0].model);
            },0)
            
            })
            .then((order)=>{
                setOrder(order);
                setTrajoDatos(true);
                console.log(trajoDatos);
            })

        console.log("ORDER ORDER ORDER PROP" + props.order[0].model);
        console.log("ORDER ORDER ORDER SETEADO" );
        order.map((item) => console.log("www" + item.model));

    }, [])

    return ( 

        <Fragment>

            {
                
                    trajoDatos == false ?
                    
                        
                            <div className="float-left">
                               <p>ssss</p>
                            </div>
                    

                    :

                    order.map((item) => 

                        <div>
                            <p>Producto: {item.model}</p>
                            <p>Cantidad: {item.quantity} </p>
                            <p>Precio: {item.price} </p>
                        </div>
                    
                    )


                // <p>{props.order[0].model}</p>

            }

        </Fragment>

     );



}
 
export default Order;