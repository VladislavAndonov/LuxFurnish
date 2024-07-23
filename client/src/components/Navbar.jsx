import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="p-4 shadow bg-[#1a1a1a]">
            <div className="container mx-auto text-white p-2 flex justify-between items-center">
                <div className="text-4xl">
                    <Link to="/">LuxFurnish</Link>
                </div>
                <div className="space-x-8">
                    <Link to="/" className="text-xl hover:underline underline-offset-8 focus:underline-offset-8">HOME</Link>
                    <Link to="/catalog" className="text-xl hover:underline underline-offset-8 focus:underline-offset-8">CATALOG</Link>
                    <Link to="/about" className="text-xl hover:underline underline-offset-8 focus:underline-offset-8">ABOUT</Link>
                    <Link to="/login" className="text-xl hover:underline underline-offset-8 focus:underline-offset-8">LOGIN</Link>
                    <Link to="/register" className="text-xl hover:underline underline-offset-8 focus:underline-offset-8">REGISTER</Link>
                </div>
            </div>
        </nav>
    );
}
