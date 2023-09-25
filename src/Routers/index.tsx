import { Routes, Route } from "react-router-dom"
import Home from "../Components/Home"
import Header from "../Components/Header"

const MainRouter = () => {
    return(
        <Routes>
            <Route path="/teste" element={<Home />} />
            <Route path="/teste/header" element={<Header />} />
        </Routes>

    )
}


export default MainRouter