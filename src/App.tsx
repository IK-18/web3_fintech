import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/output.css";
import {MoonPayBuyWidget, MoonPayProvider} from "@moonpay/moonpay-react";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Converter from "./components/Converter";
import FiatConverter from "./components/FiatConverter";

function App() {
	return (
		<MoonPayProvider
			apiKey='pk_test_gXuhfbudqsbij76caZNn09gEgakMec'
			environment='sandbox'
			debug
		>
			<BrowserRouter basename='/'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
				<MoonPayBuyWidget
					variant='overlay'
					baseCurrencyCode='usd'
					baseCurrencyAmount='100'
					defaultCurrencyCode='eth'
					visible={false}
				/>
			</BrowserRouter>
		</MoonPayProvider>
	);
}

export default App;
