import React, {Fragment, useState ,useEffect} from 'react';
import ItemCount from './ItemCount'

const ItemDetail = (props) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0);

    function onAdd(quantity){
        setQuantityToAdd(quantity);
        console.log("Cantidad desde el detail: " + quantityToAdd);
    }

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
                    quantityToAdd == 0 ?

                        <div style={{width:"35%"}}>
                            {/* Cargo el ItemCount (hijo de este comp) y además: */}
                            {/* le paso función onAdd al hijo ItemCount, para tener el dato de quantity en este Comp padre */}
                            <ItemCount stock={props.item.stock} onAdd={onAdd}/>  
                        </div>

                    :

                    <div className="mt-5" style={{width:"35%"}}>
                            <a href="/cart" className="btn btn-success" style={{width:"100%"}}>Terminar Compra</a>
                    </div>

                }
                

            </div>

        </Fragment>

     );

}
 
export default ItemDetail;