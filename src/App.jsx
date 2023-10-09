import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import {Route , Routes } from "react-router-dom"
import SignUp from "./pages/Signup";
import Feed from "./pages/Feed";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import SinglePage from "./pages/SinglePage";


function App() {
  return (
    <>
        <Navbar></Navbar>

        <Routes>
            <Route path="/login" index element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/" element={<Feed/>}></Route>
            <Route path="/product" element={<SinglePage/>}></Route>
            <Route path="/myprofile" element={<Profile/>}></Route>
        </Routes>


    </>
  );
}

export default App;

