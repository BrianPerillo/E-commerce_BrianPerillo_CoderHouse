import React, {Fragment, useState ,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Item from './Item';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = (props) => {
    
    const [item, setItem] = useState([]);
    const [trajoDatos, setTrajoDatos] = useState(true);
    const {id} = useParams();

    const getItems = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            const items = props.items
            resolve(items) 
        },2000)
        
        })
        .then((items)=>{

            items.map((item) => {
                item.id == id ?
                    setItem(item)
                :
                    setTrajoDatos(false)
                
            })
            
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