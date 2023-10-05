import { useContext } from "react"
import { Link } from "react-router-dom"
import store from "../Context"
import { AiFillStar } from "react-icons/ai"
import Star from "./Star"

const Card = ({ title, description, price, image, id, rating }) => {

    const { addToCart } = useContext(store)

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top w-100 img-thumbnail" alt="..." style={{ width: '500px', height: "300px", objectFit: "contain" }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-truncate">{description}</p>
                <p className="badge bg-success">Price: ${price}</p> <span className="badge bg-dark text-warning"> 
                <Star ratings={Math.round(rating?.rate)} />
                 {rating?.rate}( {rating?.count})</span> <br />
                <div className="d-grid col-12 mx-auto align-items-end">
                    <a href="#" onClick={() => { addToCart({ title, description, price, image, id }) }} className="btn btn-primary" style={{ position: 'relative', bottom: '0' }}>Buy Now</a>
                </div>
            </div>
        </div>
    )
}

export default Card