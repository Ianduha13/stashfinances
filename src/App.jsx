import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./index.css"
import Navbar from "./components/Navbar"
import Dashboard from "./screens/Dashboard"

const App = () => {
	return (
		<div className='App overflow-x-hidden'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
