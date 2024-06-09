import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn}=useAuth();
    const axiosPublic=useAxiosPublic();
    const navigate=useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
    .then(result=>{
        console.log(result.user);
        const userInfo={
            email: result.user?.email,
            name: result.user?.displayName
           
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
            console.log(res.data);
            navigate('/home');
        })

    })
}
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <div className='flex'><FaGoogle></FaGoogle>oOgle</div>
</button>
           
        </div>
    );
};

export default SocialLogin;