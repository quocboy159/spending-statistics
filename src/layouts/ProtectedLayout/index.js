import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Nav from "../../compoments/Nav"
import Footer from "../../compoments/Footer"
import { isAuthenticated } from "../../services/authService"

const AuthenticatedLayout = ({ children }) => {
    return <>
        <Nav />
        <Outlet />
        <Footer/>
    </>
}

export default AuthenticatedLayout