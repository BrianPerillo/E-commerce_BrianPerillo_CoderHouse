import {Link, NavLink} from 'react-router-dom';
import React, {Fragment, useContext} from 'react';

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
                                    <Link to={'/'}><img style={{width:"85px"}} src="https://image.freepik.com/vector-gratis/logotipo-cubo-generico_9569-169.jpg"/></Link>
                                </a>
                                <span></span>
                            </div>
                        </div>

                        <div id="categorias" className="col-md-6">

                            <ul className="menu menu m-0">
                            <NavLink to={`/category/1`}><li className="">Zapatillas
                                    <ul className="pb-2">
                                        <li className="p-1"><a href="">Lorem</a></li>
                                        <li className="p-1"><a href="">Lorem</a></li>
                                        <li className="p-1"><a href="">Lorem</a></li>
                                    </ul>
                                </li></NavLink>
                            </ul>

                            <ul className="menu menu m-0">
                            <NavLink to={`/category/2`}><li className=""> Remeras
                                    <ul className="pb-2">
                                        <li className="p-1"><a href="">Ipsum</a></li>
                                        <li className="p-1"><a href="">Ipsum</a></li>
                                        <li className="p-1"><a href="">Ipsum</a></li>
                                    </ul>
                                </li></NavLink>
                            </ul>
                        
                        </div>


                        <div id="cart" className="col-md-2"> 
                            <NavLink to={`/cart`}>
                                <CardWidget/>
                            </NavLink>
                        </div>

                    </nav>
                </div>
                
            </header>

        </Fragment>

     );

}
 
export default NavBar;