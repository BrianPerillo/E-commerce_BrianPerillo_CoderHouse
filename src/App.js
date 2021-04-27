import './styles/main.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  const greeting = "Bienvenido!";
  let stock = 10;

  return (

    <div className="">
      
          <NavBar/>

          <div id="index_container" className="container">
            <ItemListContainer greeting={greeting}/>
          </div>

          <div id="index_container" className="container">
            <ItemCount stock={stock}/>
          </div>

    </div>

  );

}

export default App;
