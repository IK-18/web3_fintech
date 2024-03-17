import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/output.css";
import {MoonPayProvider} from "@moonpay/moonpay-react";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
	return (
		<BrowserRouter basename='/'>
			<MoonPayProvider
				apiKey='pk_test_gXuhfbudqsbij76caZNn09gEgakMec'
				debug
			>
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
			</MoonPayProvider>
		</BrowserRouter>
	);
}

export default App;
