import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import store from "../Context";

const Login = () => {

    const [loginUser , setLoginUser ] = useState()

  const navigate = useNavigate()

  const { login , user } = useContext(store)

  useEffect(()=>{
        if(user.isAuth){
            navigate('/')
        }
  } , [user])

  function changeHandle(e){
            const {name , value } = e.target 
            setLoginUser((prev) => ({
                 ...prev ,
                 [name] : value }))
                 console.log(loginUser)
  }


  return (
    <>
    <h1>Login</h1>
    <div className="container w-50 my-5 text-dark">

      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
          onChange={changeHandle}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          onChange={changeHandle}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <button className="btn btn-outline-light mt-3" onClick={()=>{login(loginUser)}}>Login</button>
        </div>

        <div className="w-50 mx-auto text-center">
          <Link to='/signup'>create new account </Link>
        </div>
    </>
  );
};

export default Login;
