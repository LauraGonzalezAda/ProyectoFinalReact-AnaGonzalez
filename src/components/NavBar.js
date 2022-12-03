import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand  fs-1 text-bg-dark ps-3" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwuNdBmGRDPSWDOC7h4w9aupfvrQgL9X47EZRBrfI1eWXB0c6Uyrg3W3SrvhHjiEcclY&usqp=CAU" alt="" width="90" height="90" className="d-inline-block align-text-top rounded-circle"/>
                            CaraCola
                    </Link>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link to='/category/verano' className="nav-link active fs-4 text-bg-dark p-5" aria-current="page" >Verano</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/invierno' className="nav-link fs-4 text-bg-dark p-5">Invierno</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/sale' className="nav-link fs-4 text-bg-dark p-5" >OFERTAS</Link>
                            </li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </>
    )
}
export default NavBar;