import React, {Fragment, useEffect, useState, useContext} from 'react'
import {Link, NavLink, useParams} from 'react-router-dom';
import Item from './Item';

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);
    const [trajoDatos, setTrajoDatos] = useState(false);
    const [category, setCategory] = useState();
    const [category_id, setCategory_id] = useState();
    const {id} = useParams();

    useEffect(() => {

        let pedidoItems = new Promise((resolve, reject)=>{

            setTimeout(()=> {
                const items = props.items
                resolve(items) 
            },0)
            
            })
            .then((items)=>{
                console.log("items desde list container:");
                console.log(items);
                setItems(items);
                setTrajoDatos(true);
            })

            id ?
                setCategory(true)
               
            :
                setCategory(false)

            id ? 
                setCategory_id(id)
            : 
                setCategory(false)


        }, [])

    return ( 

        <Fragment>

            <div>
        
                {   
                    trajoDatos && category == false ?
                    
                        items.map((item) => 
                            <div className="float-left">
                                <NavLink to={`/item/${item.id}`}><Item item={item}/></NavLink>
                            </div>
                        )

                    :

                        items.map((item) => 
                            item.category_id == id ?
                                <div className="float-left">
                                    <NavLink to={`/item/${item.id}`}><Item item={item}/></NavLink>
                                </div>
                            :
                                <div className="float-left">
                                
                                </div>
                        )


                }

           </div>

           <div>

           </div>

        </Fragment>

     );

}
 
export default ItemListContainer;