import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const[cartList, setCartList] = useState([])
    
    const agregarAlCarrito = (item, qty) => {
    setCartList([
        ...cartList,
        {
        qty: qty,
        title: item.title,
        imgurl: item.imgurl,
        price: item.price,
        id: item.id,
        }
    ])
    }
    
    const borrarTodo = () => {
        setCartList([])
    }
    
    const borrarUno = (id) => {
        let carritoActual = cartList.filter(item => item.id != id)
        setCartList(carritoActual)
    }
    
    return(
        <CartContext.Provider value={{cartList, agregarAlCarrito, borrarTodo, borrarUno}}> 
            {props.children}
        </CartContext.Provider>
    )
    
}

  export default CartContextProvider;