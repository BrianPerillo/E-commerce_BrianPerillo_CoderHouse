import './styles/main.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  const items = [
    {
      id: 1,
      category: 1,
      model:'Adidas Duramo',
      img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatilla-adidas-duramo-sl-mujer-negra-100010fv8794001-1.jpg',
      marca:'Adidas',
      description:'Altas llantas Lorem Ipsum Dolor',
      price: 12500
    },
    {
      id: 2,
      category: 1,
      model:'Nike Downshifter 9',
      img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dweb98be6a/products/NI_AQ7481-002/NI_AQ7481-002-1.JPG',
      marca:'Nike',
      description:'Altas llantas pero de otra marca',
      price: 11250
    },
    {
      id: 3,
      category: 2,
      model:'Remera Nike Glam',
      img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4b28ff42/products/NI_BV3815-010/NI_BV3815-010-1.JPG',
      marca:'Nike',
      description:'La nueva Remera Nike Top SS Glam, está diseñada con ...',
      price: 3.199
    }
  ]

  let stock = 10;

  return (

    <BrowserRouter>

    <Switch>

    <Route exact path="/">
      <div className="">
          <NavBar/>

          <div id="index_container" className="container">
            <ItemListContainer items={items}/>
          </div>

      </div>
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
      
        <ItemCount stock={stock}/>
      </div>
    </Route>

    </Switch>

    </BrowserRouter>

  );

}

export default App;
