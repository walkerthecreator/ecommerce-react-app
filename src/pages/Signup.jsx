import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import store from "../Context";


const SignUp = () => {
  
    return (
      <>
      <div className="container w-50 my-5 text-dark" >

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
  
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
  
        <button className="btn btn-outline-light mt-3">Signup</button>
          </div>

        <div className="w-50 mx-auto text-center">
          <Link to='/login'>already have an account ?</Link>
        </div>

      </>
    );
  };

  export default SignUp