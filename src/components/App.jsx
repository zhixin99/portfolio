
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Journal from "./pages/Journal"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import ScrollToTop from "./ScrollToTop"

export default function App() {

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/journal" element={<Journal/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
	)
}

