import {Link, NavLink} from 'react-router-dom';
import React, {Fragment, useContext, useEffect, useState} from 'react';

import {CartContext} from '../context/CartContext';
import OrderItem from './OrderItem';
import {db} from '../firebase';

const Order = (props) => {


    const [order, setOrder] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("HOLA");
       
        db.collection('orders').onSnapshot((querySnapshot) => {
                
            querySnapshot.forEach((doc) => {

            if(doc.id == 'BQbW4C7dyhFZoLARUkpH' ){
                console.log("HOLA");
                console.log(doc.data().order);
                setOrder(doc.data().order)
                console.log("ORDERN SETEADA" + order);
                console.log("ORDERN SETEADA" + doc.data());
            }

             
        }); 
    
    });

    setLoading(false)

    }, [])

    return ( 

        <Fragment>

            {
            
            loading == false ?
                <div>
                    <h2>Orden</h2>
                    <OrderItem order={order}/>
                </div>
            : 

            <div>

                  
            </div>

            }
            

        </Fragment>

     );



}
 
export default Order;