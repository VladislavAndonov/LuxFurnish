import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
      </Router>
      <Footer />
    </>
  );
}

export default App