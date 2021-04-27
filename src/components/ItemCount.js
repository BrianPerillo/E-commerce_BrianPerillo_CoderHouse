import React, {Fragment, useState, useEffect} from 'react';

const ItemCount = (props) => {
    
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        
      console.log("Cmabio realizado");

    }, [quantity])

    function sumar(){
        if(quantity<props.stock){
            setQuantity(quantity+1);
        }
    }

    function restar(){
        if(quantity > 0){
            setQuantity(quantity-1);
        }
    }

    return ( 

        <Fragment>

            <div style={{width:"35%"}}>

                <div id="item_count" className="row">

                        <div className="col">
                            <button className="btn" onClick={sumar}>
                                <i className="fas fa-plus icon fa-lg"></i>
                            </button>
                        </div>

                        <div className="col-md-7">
                            <input className="form-control" value={quantity} type=""></input>
                        </div>

                        <div className="col">
                            <button className="btn" onClick={restar}>
                                <i className="fas fa-minus icon fa-lg"></i>
                            </button>
                        </div>

                </div> 

            
                <div className="col p-3">
                    <button className="btn btn-primary" style={{width:"100%"}} onClick={()=> setQuantity(quantity+1)}>Agregar al Carrito</button>
                </div>

            </div>

        </Fragment>

     );

}
 
export default ItemCount;