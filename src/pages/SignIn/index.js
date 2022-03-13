import { useNavigate, Link } from "react-router-dom";
import useInput from "../../hooks/useInput"
import { signinWithGoogle, loginWithEmailAndPassword, registerWithEmailAndPassword } from "../../services/authService";
import Icon from "../../compoments/Icon";
import { TITLE_PAGE } from '../../commons'

const SignIn = () => {
    const navigate = useNavigate();

    // login by email, password
    const emailInput = useInput("");
    const passwordInput = useInput("");
    const handleSignIn = async (event) => {
        event.preventDefault()
        await loginWithEmailAndPassword(emailInput.value, passwordInput.value)
        navigate("/")
    }
    // login by google
    const handleSignInWithGoogle = async (event) => {
        event.preventDefault()
        await signinWithGoogle()
        navigate("/")
    }

    return <>
        <div className="md:h-screen bg-white flex flex-col space-y-10  items-center justify-center">
            <div className="bg-white w-96 shadow-xl rounded p-5">
                <h1 className="text-3xl font-medium text-center">Welcome</h1>
                <p className="text-sm text-center">{TITLE_PAGE}</p>

                <form className="space-y-5 mt-5">
                    <input type="email" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" {...emailInput} />
                    <input type="password" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="Password" {...passwordInput} />
                    <div className="flex">
                        <a className="font-medium text-blue-900 hover:cursor-pointer hover:underline rounded-md p-2">Forgot Password ?</a>
                    </div>
                    <button id="sign-in-button" onClick={handleSignIn} className="text-center w-full hover:bg-blue-700 bg-blue-900 rounded-md text-white py-3 font-medium">Login</button>
                    <div className="text-center flex justify-center">
                        <Icon onClick={handleSignInWithGoogle} />
                    </div>
                    <div className="pt-8">
                        Don't have an account?<Link to="/signup" className="font-medium text-blue-900 hover:cursor-pointer hover:underline rounded-md p-2">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default SignIn