import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';
import { useContext } from 'react';


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const { agregarAlCarrito } = useContext(CartContext)

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " productos.");
        setItemCount(qty);
        agregarAlCarrito(item, qty)
    }

    return (
        <>
        {
            item && item.imgurl
            ? 
            <div className="card mb-3 bg-danger">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.imgurl} className="img-fluid rounded-start imgdetalle" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">${item.price}</p>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' ><button className="btn btn-dark">Ir al carrito</button></Link>
                    }
                  </div>
                </div>
              </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;




















// import ItemCount from "./ItemCount";

// const ItemDetail = ({item}) => {
//       return(
//         <>
//             <div className="card mb-3 bg-danger">
//               <div className="row g-0">
//                 <div className="col-md-4">
//                   <img src={item.imgurl} className="img-fluid rounded-start imgdetalle" alt="..."/>
//                 </div>
//                 <div className="col-md-8">
//                   <div className="card-body">
//                     <h5 className="card-title">{item.title}</h5>
//                     <p className="card-text">{item.description}</p>
//                     <p className="card-text">${item.price}</p>
//                     <ItemCount/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//         </>
//       )
// }

// export default ItemDetail;