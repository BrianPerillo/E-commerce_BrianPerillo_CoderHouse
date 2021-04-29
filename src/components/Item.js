import React, {Fragment} from 'react'

const Item = (props) => {
    
    return ( 

        <Fragment>

                
        <div class="product-card">

            <div class="badge">
                Oferta
            </div>

            <div id="contenedor_imagen" className="d-flex justify-content-center">
                <img src={props.item.img} alt=""></img> 
            </div>

            <div class="product-details">
                {/* Categoría */}
                {/* <span class="product-catagory">Women,bag</span> */}
                {/* Nombre */}
                <h4><a href="">{props.item.model}</a></h4>  
                {/* Descripción */}
                <p>{props.item.description}</p>
                <div class="product-bottom-details">
                    <div class="product-price">
                        {/* Precio */}
                        {/* <small>$96.00</small> */}
                        ${props.item.price}
                    </div>
                    <div class="product-links">
                        <a href=""><i class="fa fa-heart"></i></a>
                        <a href=""><i class="fa fa-shopping-cart"></i></a>
                    </div>
                </div>
            </div>

        </div>

        </Fragment>

     );

}
 
export default Item;
