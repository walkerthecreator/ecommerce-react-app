import { createContext, useContext, useState } from "react"
import Db from "./Db";

const store = createContext();

export const StoreProvider = ({ children }) => {
    // user auth 

    const localData = JSON.parse(localStorage.getItem("user"))

    const [user, setUser] = useState({ 
        data: localData ,
        isAuth: localData ? true : false })

    const login = (userData) => {
        // nitin@123 , nitin
        const { email, password } = userData
        const userIndex = Db.findIndex((item) => {  //0
            return item.email === email
        })

        if (userIndex !== -1) {
            if (Db[userIndex].password === password) {
                localStorage.setItem("user", JSON.stringify({ email : Db[userIndex].email , name : Db[userIndex].name }))
                setUser({ data: { name: Db[userIndex].name, email, password }, isAuth: true })
            }
            else {
                // invalid password 
                alert("invalid password")
            }
        }
        else {
            // send invalid email
            alert("invalid email")
        }
    }

    // cart

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const ans = cart.findIndex((item) => {
            return item.product.id === product.id
        })

        if (ans === -1) {
            setCart([...cart, { product: product, count: 1 }])
        }
        else {
            cart[ans].count = cart[ans].count + 1;
        }
    }

    const removeFromCart = (productId) => {
        const newarray = cart.filter((item) => {
            return item.product.id !== productId
        })
        setCart(newarray)
    }

    const handleIncrement = (productId) => {

        const itemIndex = cart.findIndex((item) => {
            return item.product.id === productId
        })

        cart[itemIndex].count = cart[itemIndex].count + 1
        setCart([...cart])

    }

    const handleDecrement = (productId) => {
        const itemIndex = cart.findIndex((item) => {
            return item.product.id === productId
        })

        if (cart[itemIndex].count !== 1) {
            cart[itemIndex].count = cart[itemIndex].count - 1
            setCart([...cart])
        }

    }

    return (
        <store.Provider value={{ cart, addToCart, handleIncrement, handleDecrement, removeFromCart, login, user, setUser }}>
            {children}
        </store.Provider>
    )
}

export default store 
