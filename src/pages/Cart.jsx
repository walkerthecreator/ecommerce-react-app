import { useContext } from "react"
import store from "../Context"
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"



const EmptyCart = () => {
    return (
        <div className="container p-4 bg-secondary text-center rounded">
            <p className="display-1"><AiOutlineShoppingCart/></p>
            <h1>Your Bag is empty </h1>
            <Link to='/'><button className="btn btn-dark my-4">Browse Products </button></Link>
        </div>
    )
}



const Cart = () => {

    const { cart, handleIncrement, handleDecrement , removeFromCart } = useContext(store)


    return (
        <>
            <h1 className="text-center my-3">Shop Bag <AiOutlineShoppingCart/></h1>
            <div className="container d-flex flex-wrap justify-content-around w-100 mt-5 gap-3">


            {
                    (cart.length == 0) ? <EmptyCart />
                    :
                        cart.map((item) => {
                            return (
                                <div className="card" style={{ width: "18rem" }} key={item.id}>
                                    <img src={item.product.image} className="card-img-top w-100 img-thumbnail" alt="..." style={{ width: '500px', height: "300px", objectFit: "contain" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.product.title}</h5>
                                        <p className="badge bg-success">Price: ${item.product.price}</p> <br />
                                        <div className="d-grid col-12 mx-auto align-items-end">
                                            <div className="input-group mb-3">
                                                <button className="input-group-text" id="basic-addon1" onClick={() => { handleDecrement(item.product.id) }}>-</button>
                                                <input type="text" className="form-control" value={item.count} style={{ width: '20px', cursor: 'default' }} readOnly />
                                                <button className="input-group-text" id="basic-addon1" onClick={() => { handleIncrement(item.product.id) }}>+</button>
                                            </div>
                                            <a href="#" onClick={() => { removeFromCart(item.product.id) }} className="btn btn-outline-danger" style={{ position: 'relative', bottom: '0' }}>remove <AiOutlineDelete/> </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
            }
            </div>
        </>
    )
}

export default Cart