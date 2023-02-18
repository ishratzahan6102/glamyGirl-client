import React, { useContext, useState,  } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login.jpg'
import { AuthContext } from '../../Context/Context';

const Login = () => {

    const {register, formState : {errors}, handleSubmit, handleChange} = useForm()
        const {user, loginUser, updateUser,  googleSignIn } = useContext(AuthContext)
    // password na milar error
    const [loginError, setLoginError ] = useState('')

    const [loginUserEmail, setLoginUserEmail] = useState('')




    // login korle koi redirect hobe
    const location = useLocation()


    const navigate = useNavigate()


    const from = location.state?.from?.pathname || '/'


    const handleLogin = data => {
        console.log(data)
        toast.success(`Welcome back!`)
        navigate('/') 
           
    }
 
  
    const handleGoogle = data => {
        setLoginError('')
        googleSignIn()
        .then((result) =>{
            const user  = result.user
            console.log(user)
            toast.success(`Welcome back ${user.displayName}.`)
            navigate(from, {replace: true}) 
        })
        .catch((error) => { 
            console.log(error)
            setLoginError(error)
        })
       
    }



    return (
        <div className="hero  mx-auto bg-white text-black p-0 lg:p-10  ">
        <div className="hero-content grid grid-cols-1  gap-6 md:grid-cols-2 ">

            <img src={login} className="w-full rounded-lg " />
            <div>
            <div className='flex '>
               <div className='w-full shadow p-4 lg:p-28'>
                    <h2 className='text-4xl text-black font-bold uppercase mb-4'>Log In</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>

                 <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-black">Phone number</span>
                    </label>
                    <input type='number'  className='input bg-white input-bordered input-primary' {...register("number" , {required: "number address is required"})}  />
                    {errors.number && <p className='text-error'>{errors.number?.message}</p>}
                </div>

                    

                 <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-black">Password</span>
                    </label>
                    <input type='password' className='input input-bordered input-primary bg-white' {...register("password", {required: "Password is required", minLength: {value : 6, message: "Password must be at least 6 characters long"}})}    />
                    {errors.password && <p className='text-error'>{errors.password?.message}</p>}

                    <label className="label">
                        <span className="label-text text-black">Forget Password ?</span>
                    </label>
                </div>
                
                {/* <p>{data}</p> */}
                <input className='btn border-none bg-gradient-to-r from-primary font-bold text-white to-black p-2 w-full uppercase' value='Log In' type="submit" />
                {loginError && <p className='text-errors'>{loginError}</p>}
                <p className='text-black'>New to GlamyGirl?<Link  className=' font-bold text-black mt-4' to='/signup'> Create New Account </Link></p>
                <div className='divider'>OR</div>


                      
                <div onClick={handleGoogle} class="gbtn border-none flex gap-2 flex-row items-center p-2">
                                    <div class="google-icon-wrapper">
                                        <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                                    </div>
                                    <p class="btn-text  "><b>Sign in with google</b></p>
                                </div>


              
                </form>
               
               </div>

                 
            </div>
            </div>
        </div>
        </div>


        
    );
};

export default Login;