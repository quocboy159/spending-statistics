import { memo } from "react"
import { Link } from 'react-router-dom'
import { TITLE_PAGE } from '../../commons'

function Footer () {

    return <>
        <footer className="text-center p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link to="/" className="hover:underline">{TITLE_PAGE}</Link>. All Rights Reserved.
            </span>
        </footer>
    </>
}

export default memo(Footer)