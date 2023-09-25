import { Routes, Route } from "react-router-dom"
import Home from "../Components/Home"
import Header from "../Components/Header"
import Gay from "../Components/Gay"
import Error from "../Components/Error"

const MainRouter = () => {
    return(
        <Routes>
            <Route path="/teste" element={<Home />} />
            <Route path="/teste/header" element={<Header />} />
            <Route path="/teste/gay"
            element={<Gay />} />
            <Route path="*" element={<Error />}
             />
        </Routes>

    )
}


export default MainRouter