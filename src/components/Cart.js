import { useContext } from "react";
import {CartContext} from './CartContext';
import { Link } from "react-router-dom";


const Cart = () => {

  const { cartList, borrarTodo, borrarUno } = useContext(CartContext)
  
  
    return(
      <>
        <h1  className='mt-3 tituloCarrito'>Carrito de compras</h1>
        <div className="colorCarrito ">
          <Link to='/' className="btn btn-white bordeContinuarShopping bg-danger"> Continuar en el shopping </Link>
          <button onClick={borrarTodo} className="btn btn-dark buttonEliminaCarrito"> Borrar todo el carrito </button>
        </div>
        {
        cartList.length === 0
        ? <span> Carrito vacio, podes volver al shopping</span>
        : cartList.map(item => 
          <div className="carrito_body m-4 bg-danger">
            <img src={item.imgurl}/>
            <h4>{item.title}</h4>
            <p>${item.price} </p>
            <p>Cantidad: {item.qty}</p>
            <button onClick={() => borrarUno(item.id)} className="btn btn-dark"> Borrar</button>
          </div>
          )
        } 
        
      </>
    )
  };
  export default Cart;
  