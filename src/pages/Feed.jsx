import { useContext, useEffect, useReducer, useState } from "react"
import Card from "../components/Card"
import store from "../Context"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import reducer from "../reducers/FilterReducer"

const Feed = () => {

    const [state, dispatch] = useReducer(reducer, { products: null, filteredData: null })

    console.log("starting state", state)

    const getData = async () => {
        let res = await fetch("https://fakestoreapi.com/products")
        res = await res.json()
        dispatch({ type: 'GET_DATA', payload: res })
    }

    useEffect(() => {
        getData()
    }, [])


    return (

        <>

            <div className="container my-3 d-flex justify-content-end">

                <div className="dropdown-center">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        sort
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="btn " onClick={()=>{dispatch({type : 'SORT_ASC'})}}>Price <AiOutlineArrowDown /></button></li>
                        <li><button className="btn " onClick={()=>{dispatch({type : 'SORT_DSC'})}}>Price <AiOutlineArrowUp /></button></li>
                    </ul>
                </div>


                <div className="dropdown mx-2">
                    <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter
                    </button>
                    <ul className="dropdown-menu">
                        <li onClick={() => { dispatch({ type: 'FILTER', payload: "men's clothing" }) }}><a className="dropdown-item" href="#">Men clothing</a></li>
                        <li onClick={() => { dispatch({ type: 'FILTER', payload: "jewelery" }) }}><a className="dropdown-item" href="#">Jewelery</a></li>
                        <li onClick={() => { dispatch({ type: 'FILTER', payload: "women's clothing" }) }}><a className="dropdown-item" href="#">Women Clothing</a></li>
                        <li onClick={() => {
                            dispatch({
                                type: 'FILTER', payload:
                                    "electronics"
                            })
                        }}><a className="dropdown-item" href="#">Tech</a></li>
                    </ul>
                </div>

            </div>

            <div className="container d-flex flex-wrap justify-content-around w-100 mt-5 gap-3" >
                {
                    // products.data?.map((item, index) => {
                    //     return <Card key={item.id} {...item} />
                    // })
                    state.filteredData?.map((item, index) => {
                        return <Card key={item.id} {...item} />
                    })
                }
            </div>
        </>
    )
}

export default Feed