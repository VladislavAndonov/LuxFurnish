import { useState } from "react";

export default function Form() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
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
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white rounded-lg shadow-lg p-8">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>

                    <form
                        action="#"
                        method="POST"
                        className="space-y-6 mt-8"
                        onSubmit={formSubmitHandler}
                    >
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                First Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    onChange={changeHandler}
                                    value={values.firstName}
                                    className="p-2 block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    onChange={changeHandler}
                                    value={values.lastName}
                                    className="p-2 block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                                    className="p-2 block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-500 hover:text-indigo-400">
                                        Forgot password?
                                    </a>
                                </div>
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
                                    className="p-2 block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-500 hover:text-indigo-400">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}