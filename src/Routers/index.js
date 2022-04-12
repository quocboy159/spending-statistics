import { Routes, Route } from "react-router-dom"
import AuthenticatedLayoutRoutes from "./AuthenticatedLayoutRoutes"
import LoginLayoutRoutes from "./LoginLayoutRoutes"

const Routers = () => {
    return <>
        <main className='md:px-10 mb-auto'>
            <Routes>
                <AuthenticatedLayoutRoutes />
                <LoginLayoutRoutes />
                <Route path='*' element={
                    <main>
                        <p>There's nothing here!</p>
                    </main>
                } />
            </Routes>
        </main>
    </>
}

export default Routers