import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    }, []);

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const restar = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <>
           <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-dark" onClick={restar}>-</button>
              <p className="parrafoCount"> {count} </p>
              <button type="button" className="btn btn-dark" onClick={sumar}>+</button>
            </div>
            {
                stock && count
                ? <button className="btn btn-dark m-5" onClick={() => onAdd(count)}>Agregar al carrito</button>
                : <button className="btn btn-dark m-5" disabled>Agregar al carrito</button>
            }
            
        </>
    );
}

export default ItemCount;




















// import { useState } from "react";

// const ItemCount = () => {
//     const [counter, setCounter] = useState(0);
    
//     const sumar = () => {
//         setCounter(counter + 1)
//     }

//     const restar = () => {
//         setCounter(counter - 1)
//     }

//     return(
//         <>
//             <div className="btn-group" role="group" aria-label="Basic example">
//               <button type="button" className="btn btn-dark" onClick={restar}>-</button>
//               <p className="parrafoCount"> {counter} </p>
//               <button type="button" className="btn btn-dark" onClick={sumar}>+</button>
//             </div>
            
//         </>
//     )
// }
// export default ItemCount;