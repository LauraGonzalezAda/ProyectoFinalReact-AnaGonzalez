import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";


const CartWidget = () => {
    const { ItemsQty } = useContext(CartContext)
    
    return(
        <>
        <Link to='/cart'>
            <button type="button"  className="btn btn-primary position-relative m-5 bg-white border-white">🛒 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"> {ItemsQty()} </span>
            </button>
        </Link>
        </>
    )
}
export default CartWidget;