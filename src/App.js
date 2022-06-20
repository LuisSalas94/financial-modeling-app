/* eslint-disable */
import "./App.css";
//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Details from "./components/details/Details";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:idCompany" element={<Details />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
