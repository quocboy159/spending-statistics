import { Route } from "react-router-dom"
import AuthenticatedLayout from "../layouts/ProtectedLayout"
import About from "../pages/About"
import Home from "../pages/Home"

const AuthenticatedLayoutRoutes = () => {
    return (
    <Route path="/" element={<AuthenticatedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
    </Route>
    )

}
export default AuthenticatedLayoutRoutes