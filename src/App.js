import './styles/main.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const greeting = "Bienvenido!";

  return (

    <div className="">
      
          <NavBar/>

          <div id="index_container" className="container">
            <ItemListContainer greeting={greeting}/>
          </div>

    </div>

  );

}

export default App;
