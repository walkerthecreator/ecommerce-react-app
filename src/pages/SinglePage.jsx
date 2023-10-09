import { useContext } from "react"
import store from "../Context"
import Star from "../components/Star"

const SinglePage = () => {

    const { state } = useContext(store)
    const { singleProduct } = state

  return (
    <div>
        <div className="d-flex gap-5 mt-5 container p-2 ">
            <img width={300} src={singleProduct.image} alt={ singleProduct.title } />
            <div>
                <h1>{singleProduct.title}  </h1>
                <span className="badge bg-info my-2 ">{singleProduct.category}</span>
                <p>{singleProduct.description}</p>
                <div className="text-warning">
                    <Star ratings={Math.round(singleProduct.rating.rate)}></Star>
                    <b> ({ singleProduct.rating.count } )</b>
                </div>

                <h3 className="text-success">Rs.{singleProduct.price}</h3>

                <div className="container d-flex w-75 gap-3">
                <button className="btn btn-outline-primary px-5">Add to Bag</button>
                <button className="btn btn-primary px-5">Buy Now</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SinglePage