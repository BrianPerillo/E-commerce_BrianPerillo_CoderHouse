import React, {Fragment, useContext} from 'react';

import {CartContext} from '../context/CartContext';

const CardWidget = () => {
    
    const cartContext = useContext(CartContext) //guardo context

    return ( 

        <Fragment>

            <a id="cart" href="" style={{height: "100%", width:"80px"}}>
                <div id="" style={{height:"100%"}}>
                    <i class="fas fa-shopping-cart fa-lg"></i>
                    <div style={{width:'20px',height:'20px',background:'red', color:'white',borderRadius:'60px'}}>{cartContext.cart.length}</div>
                </div> 
            </a>  
            
        </Fragment>

     );

}
 
export default CardWidget;