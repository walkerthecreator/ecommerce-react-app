import { useContext } from "react"
import { NavLink } from "react-router-dom"
import store from "../Context"
import { AiOutlineShoppingCart } from "react-icons/ai"


const Navbar = () => {

    const { user } = useContext(store) 

  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle" >
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="#">
        Express
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              cart <AiOutlineShoppingCart />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>

        {
            user.isAuth ? 
            <li className="nav-item">
                <NavLink className="nav-link" to="/myprofile">{user.data.name}</NavLink>
            </li> 
            : 
            <>
                      <li className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        login
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/signup">
                        signup
                      </NavLink>
                    </li>
            </>
        }



        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar