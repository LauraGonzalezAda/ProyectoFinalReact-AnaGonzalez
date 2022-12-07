import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { fireStoreFetchOne } from "../utils/fireStoreFetch";

const ItemDetailContainer = () => {
    const [dato, setDato]  = useState ({});
    const { idItem } = useParams()
    
    useEffect(() => {
        fireStoreFetchOne(idItem)
        .then(response => setDato(response))
        .catch(err => console.log(err))
    }, [])
    
    
    return(
        <ItemDetail item={dato}/>
    
    )
}

export default ItemDetailContainer;
