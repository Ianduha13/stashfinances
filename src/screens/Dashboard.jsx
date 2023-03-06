import Card from "../components/Card"

const Dashboard = () => {
	return (
		<section className='w-screen bg-slate-700 text-white flex-col items-center h-screen flex px-4 py-4 gap-4'>
			<div className='content max-w-screen-2xl flex flex-col items-center h-screen'>
				<h2 className='text-2xl self-start'>Dashboard</h2>
				<div className='flex gap-4 mt-5'>
					<Card className='w-56 h-56' />
					<Card className='w-56 h-56' />
					<Card className='w-56 h-56' />
					<Card className='w-56 h-56' />
					<Card className='w-56 h-56' />
				</div>
			</div>
		</section>
	)
}
export default Dashboard
