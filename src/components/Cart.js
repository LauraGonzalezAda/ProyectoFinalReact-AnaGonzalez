import { useContext } from "react";
import {CartContext} from './CartContext';
import { Link } from "react-router-dom";


const Cart = () => {

  const { cartList, borrarTodo, borrarUno, calcTotalItem, priceTotal} = useContext(CartContext)
  
  
    return(
      <>
        <h1  className='mt-3 tituloCarrito'>Carrito de compras</h1>
        <div className="colorCarrito ">
          <Link to='/' className="btn btn-white bordeContinuarShopping bg-danger"> Continuar en el shopping </Link>
          <button onClick={borrarTodo} className="btn btn-dark buttonEliminaCarrito"> Borrar todo el carrito </button>
        </div>
        <div className="row">
          {
          cartList.length === 0
          ? <span> Carrito vacio, podes volver al shopping</span>
          : cartList.map(item => 
            <div className="carrito_body m-4 bg-danger">
              <img src={item.imgurl}/>
              <h4>{item.title}</h4>
              <p>${item.price} </p>
              <p>Cantidad: {item.qty}</p>
              <p>Total:$ {calcTotalItem(item.id)}</p>
              <button onClick={() => borrarUno(item.id)} className="btn btn-dark"> Borrar</button>
            </div>
            )
          } 
    
          <div className="col-sm-6 compracard">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Caracola Carrito</h5>
                <p className="card-text">Total: ${priceTotal()}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>
        </div>
        
      </>
    )
  };
  export default Cart;
  