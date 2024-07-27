import AbstractForm from "./Form";


export default function Register() {
    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold">Register</h1>
                <p>Create a new account to join LuxFurnish.</p>
            </div>
            <div>
                <AbstractForm />
            </div>
        </>
    );
}