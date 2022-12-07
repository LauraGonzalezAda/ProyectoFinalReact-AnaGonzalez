import { useContext } from "react";
import {CartContext} from './CartContext';
import { Link } from "react-router-dom";
import { serverTimestamp, setDoc, doc, collection, increment, updateDoc  } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";



const Cart = () => {

  const { cartList, borrarTodo, borrarUno, calcTotalItem, priceTotal} = useContext(CartContext)
  
  const createOrder = () => {
    let order = {
      comprador: {
        name: 'Ana',
        email: 'anita@gmail.com',
        phone: '1123456789'
      },
      date: serverTimestamp(),
      items: cartList,
      total: priceTotal(),
    }
    
    const createOrderCompra = async () => {
      const newOrder = doc(collection(db, 'orders'))
      await setDoc(newOrder, order);
      return  newOrder
    }
    createOrderCompra()
      .then(response => {
      alert('se creo la orden: ' + response.id)
      cartList.forEach(async(item)=> {
        const itemRef = doc(db, "data", item.id);
        await updateDoc(itemRef, {
          stock: increment(-item.qty)
    });
      })
      borrarTodo()
  })
      .catch(err => console.log(err))
  }
  
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
              <img src={item.imgurl} alt=''/>
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
                <a href="#" className="btn btn-primary" onClick={createOrder}>Comprar</a>
              </div>
            </div>
          </div>
        </div>
        
      </>
    )
  };
  export default Cart;
  