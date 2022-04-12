import { Route } from "react-router-dom"
import UnProtectedLayout from "../layouts/UnProtectedLayout"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

const LoginLayoutRoutes = () => {
    return (
        <Route element={<UnProtectedLayout />}>
            <Route path="login" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
        </Route>
    )

}

export default LoginLayoutRoutes