import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import data from "../utils/data";
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
