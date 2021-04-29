import React, {Fragment, useEffect, useState} from 'react'

import Item from './Item';

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);
    const [trajoDatos, setTrajoDatos] = useState(false);
    
    useEffect(() => {

        let pedidoItems = new Promise((resolve, reject)=>{

            setTimeout(()=> {
                const items = props.items
                resolve(items) 
            },2000)
            
            })
            .then((items)=>{
                console.log(items);
                setItems(items);
                setTrajoDatos(true);
            })
        
        }, [])

    return ( 

        <Fragment>

            <div>
        
                {   
                    trajoDatos ?
                    
                        items.map((item) => 
                            <div className="float-left">
                                <Item item={item}/>
                            </div>
                        )

                    :

                    'Loading products...'


                }

           </div>

        </Fragment>

     );

}
 
export default ItemListContainer;