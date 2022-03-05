import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput"
import { signinWithGoogle } from "../../services/authService";
import Icon from "../../compoments/Icon";

const SignIn = () => {
    const emailInput = useInput("");
    const passwordInput = useInput("");
    const handleSignIn = () => {

    }
    const handleSignInWithGoogle = async () => {
        await signinWithGoogle()
    }

    return <>
        <div className="md:h-screen bg-white flex flex-col space-y-10  items-center justify-center">
            <div className="bg-white w-96 shadow-xl rounded p-5">
                <h1 className="text-3xl font-medium">Welcome</h1>
                <p className="text-sm">Minimal login page for day to day use</p>

                <form className="space-y-5 mt-5">
                    <input type="email" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" {...emailInput} />
                    <input type="password" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="Password" {...passwordInput} />
                    <div className="flex">
                        <div className="text-left">
                            <a className="font-medium text-blue-900 hover:cursor-pointer hover:underline rounded-md p-2">Forgot Password ?</a>
                        </div>
                        <div className="justify-end"> 
                            <Link to="/signup"  className="font-medium text-blue-900 hover:cursor-pointer hover:underline rounded-md p-2">Sign Up</Link>
                        </div>
                    </div>
                    <button id="sign-in-button" onClick={handleSignIn} className="text-center w-full hover:bg-blue-700 bg-blue-900 rounded-md text-white py-3 font-medium">Login</button>
                    <div className="text-center flex justify-center">
                        <Icon onClick={handleSignInWithGoogle} />
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default SignIn