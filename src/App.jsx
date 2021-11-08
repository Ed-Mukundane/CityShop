/** @format */

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} exact />
				<Route path="product" element={<ProductPage />} exact />
				<Route path="productlist" element={<ProductListPage />} exact />
				<Route path="cart" element={<CartPage />} exact />
				<Route path="login" element={<LoginPage />} exact />
				<Route path="register" element={<RegisterPage />} exact />
				
			</Routes>
		</Router>
	);
}

export default App;
