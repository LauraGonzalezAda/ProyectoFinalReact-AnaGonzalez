import { Link } from "react-router-dom";


const CartWidget = () => {
    return(
        <>
        <Link to='/cart'>
            <button type="button"  className="btn btn-primary position-relative m-5 bg-white border-white">🛒 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 </span>
            </button>
        </Link>
        </>
    )
}
export default CartWidget;