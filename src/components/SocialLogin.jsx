import { useContext } from 'react'
import logo from '../assets/google.png'
import { AuthContext } from '../provider/AuthProvider'
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';

const SocialLogin = () => {

    const {handleGoogleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log("name",name)

    // google login
    const googleLogin = () =>{
        handleGoogleLogin()
        .then((res) =>{
            console.log(res.user)
            toast.success("User Create or Login successfully")
            navigate("/")

        })
        .catch((err) =>{
            console.log(err)
            toast.error(err?.message)
        })
    }

    return (
        <div>
            <div className="divider ">Or Sign In With</div>
            <button onClick={googleLogin} className='flex bg-blue-800 rounded-md mx-auto py-2 px-5 text-white gap-2 font-bold'> <img className='w-6' src={logo} alt="google" /> Continue With Google</button>
        </div>
    )
}

export default SocialLogin