import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const[cartList, setCartList] = useState([])
    
    const agregarAlCarrito = (item, qty) => {
        let qtysItem = cartList.find(data => data.id === item.id);
        if (qtysItem === undefined) {
            setCartList([
                ...cartList,
                {
                qty: qty,
                title: item.title,
                imgurl: item.imgurl,
                price: item.price,
                id: item.id,
                stock: item.stock,
                }
            ])
            }  else {
                qtysItem.qty += qty;
                setCartList([
                    ...cartList
                ]);
        }
    }
    
    const borrarTodo = () => {
        setCartList([])
    }
    
    const borrarUno = (id) => {
        let carritoActual = cartList.filter(item => item.id !== id)
        setCartList(carritoActual)
    }
    
    const calcTotalItem = (id) => {
        let total = cartList.map(item => item.id).indexOf(id);
        return cartList[total].price * cartList[total].qty;
    }
    
    const priceTotal = () => {
        let precioTotal = 0
        cartList.forEach(item => precioTotal = precioTotal + (item.qty * item.price))
        return precioTotal
    }
    
    const ItemsQty = () => {
        let qtys = cartList.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }
    
    
    return(
        <CartContext.Provider value={{cartList, agregarAlCarrito, borrarTodo, borrarUno, calcTotalItem, priceTotal, ItemsQty}}> 
            {props.children}
        </CartContext.Provider>
    )
    
}

  export default CartContextProvider;