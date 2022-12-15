// import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductSingle from "./pages/ProductSingle";
import CartPage from './pages/Cart';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<ProductSingle/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage/>} /> 
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
