import { useContext } from "react"
import { AiOutlineLogout } from "react-icons/ai"
import store from "../Context"
import { useNavigate } from "react-router-dom"

const Profile = () => {

    const navigate = useNavigate()

    const { user ,  setUser } = useContext(store)


    function logout(){
        setUser({ data: null, isAuth: false })
        localStorage.removeItem("user")
        navigate('/login')
    }

  return (
    <>
        <h2>My Profile</h2>

        <div className="container w-75 bg-secondary p-2 my-2 rounded">
            <h2>Welcome {user.data.name} </h2>
            <span className="badge bg-primary">{user.data.email } </span>
        </div>

        <div className="container">
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

    <button className="btn btn-danger" onClick={logout} > <AiOutlineLogout/>  logout</button>
    </>
  )
}

export default Profile