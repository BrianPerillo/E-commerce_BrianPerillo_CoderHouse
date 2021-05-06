import React, {Fragment, useState ,useEffect} from 'react';


const ItemDetail = (props) => {
    

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
            </div>
            

        </Fragment>

     );

}
 
export default ItemDetail;