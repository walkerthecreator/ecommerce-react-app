import { useContext, useEffect, useState } from "react"
import Card from "../components/Card"
import store from "../Context"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"

const Feed = () => {

    const [products, setProduct] = useState([{ data: null }])


    const getData = async () => {
        let res = await fetch("https://fakestoreapi.com/products")
        res = await res.json()
        setProduct({ data: res })
        console.log(products)
    }

    const sortData = () => {
        const sortedArray = products.data.sort((a, b) => {
            return a.price - b.price
        })
        setProduct({ data: sortedArray })
    }

    useEffect(() => {
        getData()
    }, [])


    return (

        <>

            <div className="dropdown-center">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    sort
                </button>
                <ul className="dropdown-menu">
                    <li><button className="btn btn-dark" onClick={sortData}>Price <AiOutlineArrowDown/></button></li>
                    <li><button className="btn btn-dark"  onClick={sortData}>Price <AiOutlineArrowUp/></button></li>
                </ul>
            </div>
            <div className="container d-flex flex-wrap justify-content-around w-100 mt-5 gap-3" >


                {
                    products.data?.map((item, index) => {
                        return <Card key={item.id} {...item} />
                    })
                }
            </div>
        </>
    )
}

export default Feed