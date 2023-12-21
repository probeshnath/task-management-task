import logo from '../assets/google.png'

const SocialLogin = () => {

    // google login
    const googleLogin = () =>{}

    return (
        <div>
            <div className="divider ">Or Sign In With</div>
            <button onClick={googleLogin} className='flex bg-blue-800 rounded-md mx-auto py-2 px-5 text-white gap-2 font-bold'> <img className='w-6' src={logo} alt="google" /> Continue With Google</button>
        </div>
    )
}

export default SocialLogin