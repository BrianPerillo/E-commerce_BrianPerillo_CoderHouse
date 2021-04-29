import React, {Fragment} from 'react'
import CardWidget from './CardWidget';

const NavBar = (props) => {
    


    return ( 

        <Fragment>

            <header>
                <div className="container">

                    <nav className="row">

                        <div className="col-md-4">
                            <h1 hidden>Nombre E-commerce</h1>
                        
                            <div>
                                <a href="">
                                    <img style={{width:"85px"}} src="https://image.freepik.com/vector-gratis/logotipo-cubo-generico_9569-169.jpg"/>
                                </a>
                                <span>(Logo provisorio / de muestra)</span>
                            </div>
                        </div>

                        <div id="categorias" className="col-md-6">

                            <ul className="menu menu m-0">
                                <li className=""> Categoría 1
                                    <ul className="pb-2">
                                        <li className="p-1"><a href="">Lorem</a></li>
                                        <li className="p-1"><a href="">Lorem</a></li>
                                        <li className="p-1"><a href="">Lorem</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="menu menu m-0">
                                <li className=""> Categoría 2
                                    <ul className="pb-2">
                                        <li className="p-1"><a href="">Ipsum</a></li>
                                        <li className="p-1"><a href="">Ipsum</a></li>
                                        <li className="p-1"><a href="">Ipsum</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="menu menu m-0">
                                <li className=""> Categoría 3
                                    <ul className="pb-2">
                                        <li className="p-1"><a href="">Dolor</a></li>
                                        <li className="p-1"><a href="">Dolor</a></li>
                                        <li className="p-1"><a href="">Dolor</a></li>
                                    </ul>
                                </li>
                            </ul>
                        
                        </div>

                        <div id="cart" className="col-md-2">
                            <CardWidget/>
                        </div>

                    </nav>
                </div>
                

            </header>

        </Fragment>

     );

}
 
export default NavBar;