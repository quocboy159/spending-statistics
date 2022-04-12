import { Outlet } from "react-router-dom"
import Nav from "../../compoments/Nav"
import Footer from "../../compoments/Footer"

const AuthenticatedLayout = ({ children }) => {
    return <>
        <Nav />
        <Outlet />
        <Footer/>
    </>
}

export default AuthenticatedLayout