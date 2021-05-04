import React, {Fragment, useState ,useEffect} from 'react';

import Item from './Item';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = (props) => {
    
    const [item, setItem] = useState([]);
    const [trajoDatos, setTrajoDatos] = useState(false);

    const getItems = new Promise((resolve, reject)=>{

        setTimeout(()=> {
            const items = props.items
            resolve(items) 
        },2000)
        
        })
        .then((items)=>{
            setItem(items[0]);
            setTrajoDatos(true);
        })

    useEffect(() => {

        function ItemListContainer(){
            getItems()
        }
    
        }, [])

    return ( 


        <Fragment>
            
            <ItemDetail item={item}/>

        </Fragment>

     );

}
 
export default ItemDetailContainer;