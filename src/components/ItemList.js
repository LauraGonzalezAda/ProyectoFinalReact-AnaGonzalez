import Item from "./Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fireStoreFetch } from "../utils/fireStoreFetch";

const ItemList = () => {
    const [datos, setDatos] = useState ([])
    const {idCategory} = useParams()
    
    useEffect(() => {
        fireStoreFetch(idCategory)
            .then(response => setDatos(response))
            .catch(err => console.log(err))
    }, [idCategory]);
    
    return(
        <>
        <div className="row row-cols-1 row-cols-md-5 g-4 m-5">
            {
            datos.map(item => (
            <Item
            key={item.id}
            imgurl={item.imgurl}
            title= {item.title}
            price= {item.price}
            id={item.id}
            stock= {item.stock}
            />
            ))
            }
        </div>
        </>
    )
}
export default ItemList;