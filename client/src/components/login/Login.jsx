import { useState } from "react";

export default function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

        console.log(values);
        console.log("form submitted");
    }

    return (
        <div className="login-background">
            <div className="container pt-[12em] mx-auto flex justify-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-md bg-[rgba(215,218,211,0.9)] rounded-md shadow-md p-8 scale-110">
                    <h2 className="text-3xl font-bold text-[#1A1A1A] ">
                        Login to your account
                    </h2>

                    <p className="mt-4 text-l text-gray-500">
                        Don&apos;t have an account yet?{' '}
                        <a href="/register" className="font-semibold leading-6 text-[#76A763] hover:text-[#93B685]">
                            Register here.
                        </a>
                    </p>

                    <form
                        action="#"
                        method="POST"
                        className="space-y-6 mt-10"
                        onSubmit={formSubmitHandler}
                    >

                        <div>
                            <label htmlFor="email" className="block text-xl font-medium leading-6 text-[#1A1A1A]">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    onChange={changeHandler}
                                    value={values.email}
                                    className="p-2 block w-full rounded border border-gray-300 py-1.5 text-[#1A1A1A] shadow-md focus:ring focus:ring-[#76A763]"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-xl font-medium leading-6 text-[#1A1A1A]">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    onChange={changeHandler}
                                    value={values.password}
                                    className="p-2 block w-full rounded border border-gray-300 py-1.5 text-[#1A1A1A] shadow-md focus:ring focus:ring-[#76A763]"
                                />
                            </div>
                            <div className="text-l mt-2">
                                <a href="#" className="font-semibold text-[#76A763] hover:text-[#93B685]">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex mt-8 w-full justify-center rounded bg-[#76A763] px-4 py-2 text-xl font-semibold leading-6 text-white shadow-md hover:bg-[#93B685] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93B685]"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}