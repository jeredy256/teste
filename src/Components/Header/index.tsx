import {Link, Outlet} from "../../../node_modules/react-router-dom/dist/index"

const Header = () =>{
  return(
    <>
    <h1>Hello wolrd</h1>
    <Link to= "/teste" >Home</Link>
    <Outlet />
    </>
    )
}


export default Header
