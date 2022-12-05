import "../App.css";
import { Link } from "react-router-dom";

const Item = (props) => {
    return(
        <>
              <div className="col">
                <div className="card bg-danger">
                  <img src={props.imgurl} className="card-img-top imgAl"alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title colort">{props.title}</h5>
                    <p className="card-text colort">${props.price}</p>
                    <Link to={`/item/${props.id}`} className="detalle">Detalle</Link>
                  </div>
                </div>
              </div>
        </>
    )
}
export default Item;