import { useState } from "react";
import { useRegister } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const initialValues = { email: '', password: '', rePassword: '' };

export default function Register() {
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const register = useRegister();
    const navigate = useNavigate();

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const registerHandler = async ({ email, password, rePassword }) => {
        if (password !== rePassword) {
            setError("Passwords should match!");
            return false;
        }
        try {
            await register(email, password);
            navigate('/');
            return true;
        } catch (err) {
            setError(err.message);
            return false;
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        registerHandler,
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/register-bg-hq.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="relative z-10 w-full max-w-md px-8 py-10 bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-lg shadow-lg">
                <h2 className="text-4xl font-extrabold text-white text-center">
                    Create an Account
                </h2>

                <p className="mt-4 text-center text-gray-300">
                    Already have an account?{' '}
                    <Link to="/login" className="font-semibold text-[#76A763] hover:text-[#93B685] transition-colors">
                        Login here
                    </Link>
                </p>

                <form className="space-y-6 mt-8" onSubmit={submitHandler}>
                    <div className="relative">
                        <label htmlFor="email" className="text-white text-xl font-medium">
                            Email
                        </label>
                        <div className="flex mt-2">
                            <span className="inline-flex items-center px-3 text-xl text-gray-500 bg-gray-200 rounded-l-md">
                                <AiOutlineMail />
                            </span>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                onChange={changeHandler}
                                value={values.email}
                                className="block w-full rounded-r-md bg-gray-100 border border-gray-300 text-[#1A1A1A] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#76A763]"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="text-white text-xl font-medium">
                            Password
                        </label>
                        <div className="flex mt-2">
                            <span className="inline-flex items-center px-3 text-xl text-gray-500 bg-gray-200 rounded-l-md">
                                <AiOutlineLock />
                            </span>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                onChange={changeHandler}
                                value={values.password}
                                className="block w-full  bg-gray-100 border border-gray-300 text-[#1A1A1A] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#76A763]"
                            />
                            <span
                                className="inline-flex items-center px-3 text-xl text-gray-500 bg-gray-200 cursor-pointer rounded-e-md"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <label htmlFor="rePassword" className="text-white text-xl font-medium">
                            Repeat Password
                        </label>
                        <div className="flex mt-2">
                            <span className="inline-flex items-center px-3 text-xl text-gray-500 bg-gray-200 rounded-l-md">
                                <AiOutlineLock />
                            </span>
                            <input
                                id="rePassword"
                                name="rePassword"
                                type={showPassword ? "text" : "password"}
                                required
                                onChange={changeHandler}
                                value={values.rePassword}
                                className="block w-full rounded-r-md bg-gray-100 border border-gray-300 text-[#1A1A1A] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#76A763]"
                            />
                        </div>
                        {error && (
                            <div className="text-red-500 mt-2 text-center">
                                <p className="font-semibold">
                                    {error}
                                </p>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex mt-10 w-full justify-center rounded-md bg-[#76A763] px-6 py-3 text-xl font-semibold text-white shadow-lg hover:bg-[#93B685] focus:outline-none focus:ring-2 focus:ring-[#93B685] transition-transform transform hover:scale-105"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
