import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import {Route , Routes } from "react-router-dom"
import SignUp from "./pages/Signup";
import { useEffect } from "react";
import Feed from "./pages/Feed";
import Card from "./components/Card";
import Cart from "./pages/Cart";


function App() {



  return (
    <>
        <Navbar></Navbar>

        <Routes>
            <Route path="/login" index element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/" element={<Feed/>}></Route>
        </Routes>


    </>
  );
}

export default App;
