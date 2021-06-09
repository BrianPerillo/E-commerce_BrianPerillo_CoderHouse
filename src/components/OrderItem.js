import {Link, NavLink} from 'react-router-dom';
import React, {Fragment, useContext, useEffect, useState} from 'react';

import {CartContext} from '../context/CartContext';
import {db} from '../firebase';

const Order = (props) => {



    useEffect(() => {

        console.log("ORDER ORDER ORDER" + props.order);

    }, [])

    return ( 

        <Fragment>

            {
                
                

            }

        </Fragment>

     );



}
 
export default Order;