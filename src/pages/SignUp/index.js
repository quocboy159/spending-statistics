import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { registerWithEmailAndPassword } from "../../services/authService";

const SignUp = () => {
    const navigate = useNavigate();
    const emailInput = useInput("");
    const fullNameInput = useInput("");
    const passwordInput = useInput("");
    const handleSignUp = async (event) => {
        event.preventDefault()
        await registerWithEmailAndPassword(emailInput.value, fullNameInput.value, passwordInput.value)
        navigate('login')
    }

    return <>
        <div className="md:h-screen bg-white flex flex-col space-y-10  items-center justify-center">
            <div className="bg-white w-96 shadow-xl rounded p-5">
                <h1 className="text-3xl font-medium text-center">Sign Up</h1>

                <form className="space-y-5 mt-5">
                    <input type="text" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="FullName" {...fullNameInput} />
                    <input type="email" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" {...emailInput} />
                    <input type="password" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="Password" {...passwordInput} />
                    <button onClick={handleSignUp} className="text-center w-full hover:bg-blue-700 bg-blue-900 rounded-md text-white py-3 font-medium">Register</button>
                </form>
            </div>
        </div>
    </>
}

export default SignUp