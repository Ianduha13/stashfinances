const Register = () => {
	return (
		<section className='layout flex-col flex'>
			<h3>Register</h3>
			<p>Fill this camps to register in our page</p>
			<form>
				<input type='text' name='username' />
				<input type='text' name='email' />
				<input type='text' name='password' />
				<input type='text' name='password2' />
			</form>
		</section>
	)
}
export default Register
