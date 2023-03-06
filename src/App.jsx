import "./index.css"
import Navbar from "./components/Navbar"
import Dashboard from "./screens/Dashboard"
import Register from "./screens/Register"
import Login from "./screens/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
