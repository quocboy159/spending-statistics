import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import clsx from "clsx";
import useInput from "../../hooks/useInput";
import { registerWithEmailAndPassword } from "../../services/authService";
import { REQUIRED_MESSAFE } from "../../commons";
import styles from "./SignUp.module.css"

const schema = yup.object({
    fullName: yup.string().required(REQUIRED_MESSAFE),
    email: yup.string().required(REQUIRED_MESSAFE).email(),
    password: yup.string().required(REQUIRED_MESSAFE).min(6)
})

const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const emailInput = useInput("");
    const fullNameInput = useInput("");
    const passwordInput = useInput("");
    const handleSignUp = async (data) => {
        await registerWithEmailAndPassword(emailInput.value, fullNameInput.value, passwordInput.value)
        navigate('/login')
    }
    const getCssForInput = (inputName) => {
        return clsx(!errors[inputName]?.message && styles.input, errors[inputName]?.message && styles.errorInput)
    }

    return <>
        <div className="md:h-screen bg-white flex flex-col space-y-10  items-center justify-center">
            <div className="bg-white w-96 shadow-xl rounded p-5">
                <h1 className="text-3xl font-medium text-center">Sign Up</h1>

                <form className="space-y-5 mt-5">
                    <input {...register("fullName")} type="text" className={getCssForInput('fullName')} placeholder="FullName" {...fullNameInput} />
                    {errors.fullName?.message && <p className={styles.error}>{errors.fullName?.message}</p>}
                    <input {...register("email")} type="email" className={getCssForInput('email')} placeholder="Email" {...emailInput} />
                    {errors.email?.message && <p className={styles.error}>{errors.email?.message}</p>}
                    <input {...register("password")} type="password"className={getCssForInput('password')} placeholder="Password" {...passwordInput} />
                    {errors.password?.message && <p className={styles.error}>{errors.password?.message}</p>}
                    <button onClick={handleSubmit(handleSignUp)} className="text-center w-full hover:bg-blue-700 bg-blue-900 rounded-md text-white py-3 font-medium">Register</button>
                </form>
            </div>
        </div>
    </>
}

export default SignUp