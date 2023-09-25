import {Link, Outlet} from "../../../node_modules/react-router-dom/dist/index"

const Home = () =>{
  return(
    <>
    <h1>Hello world</h1>
    <Link to="/teste/header">Header</Link>
     <Outlet />
    </>
    )
}


export default Home
