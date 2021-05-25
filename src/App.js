import './styles/main.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {React, useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {CartProvider} from './context/CartContext';
import {db} from './firebase';

function App() {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const items2 = [
    {
      "id":1,
      "model":"xxx",
      "description":"xxx",
      "price":1500,
      "stock":10,
      "img":"xxx"
    },
    {
      "id":2,
      "model":"aaa",
      "description":"aaa",
      "price":33,
      "stock":33,
      "img":"aaa"
    }
  ] 

  // useEffect(() => {

  //   setLoading(true);
  //   const db = getFirestore()
  //   const itemCollection = db.collection('items')
  //   itemCollection.get().then((querySnapshot) => {
  //     if(querySnapshot.size === 0){
  //       console.log("No Results!")
  //     }
  //     setItems(querySnapshot.docs.map((doc) => doc.data()))
  //     }).catch((error) => {
  //       console.log("Error searching items", error)
  //     }).fuinally(() => {
  //       setLoading(false)
  //     })

  // }, []);

  const getItems = async () => {

   db.collection('items').onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var item = doc.data()
      setItems((items) => items.concat(item))
    });
    setLoading(false)
   });
   
  } 

  useEffect(() => {
    getItems();
  }, []);

  return (

    <BrowserRouter>

    <Switch>

      <CartProvider>
        <Route exact path="/">
          <div className="">
              <NavBar/>

              <div id="index_container" className="container">
               {console.log("items: ")} 
               {console.log(items)}
               {
                !loading ? 
                    <ItemListContainer items={items}/>
                :
                "cargando"
               }
              </div>

          </div>
        </Route>
    

      <Route path="/cart">
          <NavBar/>
          <Cart/>
      </Route>
      
      <Route path="/category/:id">
        <NavBar/>

        <div id="index_container" className="container">
          <ItemListContainer items={items}/>
        </div>
      </Route>

      <Route path="/item/:id">
        <NavBar/>

        <div id="index_container" className="container">
          
            <ItemDetailContainer items={items}/>

        </div>
      </Route>
    </CartProvider>
    
    </Switch>

    </BrowserRouter>

  );

}

export default App;
