import { HiBell, HiOutlineUserCircle, HiTrendingUp } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
	const nav = useNavigate()

	return (
		<nav className='w-screen h-12 bg-slate-800 flex text-white items-center justify-between px-8'>
			<div className='flex gap-1' onClick={() => nav("/")}>
				<HiTrendingUp size={"1.8em"} />
				<label className='text-xl cursor-pointer font-medium'>
					Stash Finances
				</label>
			</div>
			<ul className='flex '>
				<li className='px-2 cursor-pointer'>
					<HiBell size={"1.6em"} />
				</li>
				<li className='px-2 border-l-2 cursor-pointer'>
					<HiOutlineUserCircle size={"1.6em"} />
				</li>
			</ul>
		</nav>
	)
}
export default Navbar
