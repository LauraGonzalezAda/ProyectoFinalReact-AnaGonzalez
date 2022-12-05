import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
        <>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.imgurl} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">${item.price}</p>
                    <ItemCount/>
                  </div>
                </div>
              </div>
            </div>
        </>
}

export default ItemDetail;