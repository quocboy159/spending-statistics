import { Outlet } from "react-router-dom"

const UnProtectedLayout = ({chidren}) => {
    return <>
    <Outlet />
    </>
}

export default UnProtectedLayout