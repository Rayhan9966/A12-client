import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    // const handleLogin=event=>{
    //     event.preventDefault();
    //     const form =event.target;
    //     const email=form.email.value;
    //     const password= form.password.value;
    //     console.log(email,password);
    // const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/home";

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])
    
	const handleLogin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
console.log(email,password);
signIn(email, password)
.then(result => {
    const user = result.user;
    console.log(user);
    Swal.fire({
        title: 'User Login Successful.',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    navigate(from, { replace: true });
})
    };
    return (
    //     <form className="flex mt-20 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
    //     <div
    //       className="hidden bg-cover lg:block lg:w-1/2"
    //       style={{
    //         backgroundImage:
    //           'url("https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80")'
    //       }}
    //     />
    //     <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
    //       <div className="flex justify-center mx-auto">
    //         <img
    //           className="w-auto h-7 sm:h-8"
    //           src="https://merakiui.com/images/logo.svg"
    //           alt=""
    //         />
    //       </div>
    //       <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
    //         Log IN
    //       </p>
    //       <a
    //         href="#"
    //         className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
    //       >
    //         <div className="px-4 py-2">
    //           <svg className="w-6 h-6" viewBox="0 0 40 40">
    //             <path
    //               d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
    //               fill="#FFC107"
    //             />
    //             <path
    //               d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
    //               fill="#FF3D00"
    //             />
    //             <path
    //               d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
    //               fill="#4CAF50"
    //             />
    //             <path
    //               d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
    //               fill="#1976D2"
    //             />
    //           </svg>
    //         </div>
    //         <span className="w-5/6 px-4 py-3 font-bold text-center">
    //           Sign in with Google
    //         </span>
    //       </a>
    //       <div className="flex items-center justify-between mt-4">
    //         <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
    //         <a
    //           href="#"
    //           className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
    //         >
    //           or login with email
    //         </a>
    //         <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
    //       </div>
    //      <form onSubmit={handleLogin}>
    //      <div className="mt-4">
    //         <label
    //           className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
    //           htmlFor="LoggingEmailAddress"
    //         >
    //           Email Address
    //         </label>
    //         <input
    //           id="LoggingEmailAddress"
    //           className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
    //           type="email" name='email ' placeholder='Email'
    //         />
    //       </div>
    //       <div className="mt-4">
    //         <div className="flex justify-between">
    //           <label
    //             className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
    //             htmlFor="loggingPassword"
    //           >
    //             Password
    //           </label>
    //           {/* <input
              
    //           className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
    //           type="password" name='password ' placeholder='Password'
    //         /> */}
    //           <a
    //             href="#"
    //             className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
    //           >
    //             Forget Password?
    //           </a>
    //         </div>
    //         <input
    //           id="loggingPassword"
    //           className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
    //           type="password" name='password ' placeholder='Password'
    //         />
    //       </div>
    //       <div className="mt-6">
           
    //         <input 
    //         className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" 
    //         type='submit' value="Login" />
    //       </div>

    //      </form>

    //       <div className="flex items-center justify-between mt-4">
    //         <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
    //         <a
    //           href="#"
    //           className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
    //         >
    //           or sign up
    //         </a>
    //         <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
    //       </div>
    //     </div>
    //   </form>
    <div className="ml-48 mt-20 p-35 h-2/4 w-2/3">
    <div className="w-full max-w-md mb-4 p-8 space-y-3 rounded-xl dark:bg-gray-200 dark:text-gray-800 ml-40" >
     <h1 className="text-2xl font-bold text-center">Login</h1>
     <form onSubmit={handleLogin} className="space-y-6">
         <div className="space-y-1 text-sm">
             <label htmlFor="username" className="block dark:text-gray-600">Email</label>
             <input type="text" name="email" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
         </div>
         {/* {emailError && <small className='text-red-800'>{emailError}</small>} */}
         <div className=" space-y-1 text-sm">
             <label htmlFor="password" className=" block dark:text-gray-600">Password</label>
             <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
             <div className="flex justify-end text-xs dark:text-gray-600">
                 <a rel="noopener noreferrer" href="#">Forgot Password?</a>
             </div>
         </div>
         {/* <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
            Sign in</button> */}
            <input  className="btn btn-primary" type="submit" value="Login" />
     </form>
     <div className="flex items-center pt-4 space-x-1">
         <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
         <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
         <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
     </div>
 
     <div className="flex justify-center space-x-4">
         <button  aria-label="Log in with Google" className="p-3 rounded-sm">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                 <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
             </svg>
         </button>
         
         <button aria-label="Log in with Facebook" className="p-3 rounded-sm">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                 <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
             </svg>
         </button>
     </div>
     <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
         <Link to='/signup' rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign up</Link>
     </p>
 </div>
         </div>
    );
};

export default Login;