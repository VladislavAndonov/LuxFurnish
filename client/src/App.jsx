import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Products from './components/products/Products';
import ProductDetails from './components/products/product-details/ProductDetails';
import AboutUs from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Footer from './components/footer/Footer';
import Logout from './components/logout/Logout';
import PrivateGuard from './components/common/PrivateGuard';
import PublicGuard from './components/common/PublicGuard';

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/products/:productId" element={<ProductDetails />} />
                            <Route path="/about" element={<AboutUs />} />

                            <Route element={<PublicGuard />}>
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                            </Route>

                            <Route element={<PrivateGuard />}>
                                <Route path="/logout" element={<Logout />} />
                            </Route>
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
