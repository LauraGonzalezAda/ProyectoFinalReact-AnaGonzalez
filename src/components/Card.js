import "../App.css";

const Card = (props) => {
    return(
        <>
              <div className="col">
                <div className="card bg-danger">
                  <img src={props.imgurl} className="card-img-top imgAl"alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title colort">{props.title}</h5>
                    <p className="card-text colort">{props.description}</p>
                    <p className="card-text colort">${props.price}</p>
                    <button className="detalle">Detalle</button>
                  </div>
                </div>
              </div>
        </>
    )
}
export default Card;