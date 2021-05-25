import React, {Fragment, useState ,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Item from './Item';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = (props) => {
    
    const [item, setItem] = useState([]);
    const [items, setitems] = useState([])
    const [trajoDatos, setTrajoDatos] = useState(true);
    const {id} = useParams();

    const getItems = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            setitems(props.items)
            resolve(items) 
        },0)
        
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

            {console.log("items desde detail container: ")}
            {console.log(items)}
            <ItemDetail item={item}/>

        </Fragment>

     );

}
 
export default ItemDetailContainer;