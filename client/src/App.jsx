import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../public/styles/index.css';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Products from './components/products/Products';
import ProductDetails from './components/products/product-details/ProductDetails';
import AboutUs from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Footer from './components/footer/Footer';
import { AuthContext } from './contexts/AuthContext';

function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        localStorage.setItem('accessToken', state.accessToken);
        
        setAuthState(state);
    }

    const contextData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
    };

    return (
        <AuthContext.Provider value={contextData}>
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={< Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/products/:productId" element={<ProductDetails />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App