import clsx from "clsx"
import { memo, useState } from "react"
import { NavLink, Link, useNavigate } from 'react-router-dom'
import styles from "./Nav.module.css"
import { isAuthenticated, logout } from "../../services/authService"

function Nav() {
    const navigate = useNavigate()
    const [isCollapse, setIsCollapse] = useState(true)
    const handleCollapse = () => {
        setIsCollapse(!isCollapse)
    }
    const handleLogout = async () => {
        await logout()
        navigate('/login')
    }

    return <header>
        <nav className={styles.navContainer}>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="pl-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Spending Statistics</span>
                </Link>
                <button onClick={handleCollapse} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div className={clsx({ "hidden": isCollapse }, "w-full md:block md:w-auto")} id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Home</NavLink >
                        </li>
                        <li>
                            <NavLink to="about" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>About</NavLink >
                        </li>
                        <li>
                            {isAuthenticated() && <button onClick={handleLogout}>Log out</button>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
}

export default memo(Nav)