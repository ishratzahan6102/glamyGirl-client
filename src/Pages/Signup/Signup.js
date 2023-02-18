import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../assets/login.jpg'
import { AuthContext } from '../../Context/Context';


const Signup = () => {

    const { createUser, updateUser, googleSignIn } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [signUpError, setSignUpError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const navigate = useNavigate();

    const handleSignup = data => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password, data.phone)
            .then((result) => {
                const user = result.user;
                console.log(user)
                toast.success('Welcome Back')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        
                    })
                    .catch(error => console.log(error))
            })
            .catch((error) => {
                console.log(error)
                setSignUpError(error)
            });
    }

    const handleGoogle = data => {
        setSignUpError('')
        googleSignIn()
            .then((result) => {
                const user = result.user
                console.log(user)
                toast.success(`Welcome back ${user.displayName}.`)
              
            })
            .catch((error) => {
                console.log(error)
                setSignUpError(error)
            })

    }

    const saveUser = (name, email, phone) => {
        const user = { name, email, phone }
        fetch(`https://glamy-girl-server.vercel.app/addUser`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log("saveUser", data)
                navigate('/')
                setCreatedUserEmail(email)
            })
    }

    return (
        <div className="hero  mx-auto bg-white text-black p-0 lg:p-10 ">
            <div className="hero-content grid grid-cols-1 gap-6 md:grid-cols-2 ">
                <div>
                    <div className=''>
                        <div className='w-full shadow  p-4 lg:p-28'>
                            <h2 className='text-4xl font-bold uppercase'>Sign up</h2>
                            <form onSubmit={handleSubmit(handleSignup)}>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-black">Name</span>
                                    </label>
                                    <input type='text' className=' input input-bordered input-primary bg-white' {...register("name", { required: "Name is required" })} />
                                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-black">Phone Number</span>
                                    </label>
                                    <input type='number' className=' input input-bordered input-primary bg-white' {...register("phone", { required: "Name is required" })} />
                                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input type='text' className='input input-bordered input-primary bg-white' {...register("email", { required: "Email address is required" })} />
                                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-black">Password</span>
                                    </label>
                                    <input type='password' className='input input-bordered input-primary bg-white' {...register("password", {
                                        required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/, message: "Password must be uppercase number & special characters" }
                                    })} />

                                    {errors.password && <p className='text-error'>{errors.password?.message}</p>}

                                    <label className="label">
                                        <span className="label-text text-black">Forget Password ?</span>
                                    </label>
                                </div>

                                {/* <p>{data}</p> */}
                                <input className='btn btn-primary border-none uppercase  bg-gradient-to-r from-primary  to-black text-white w-full' value='Sign up' type="submit" />
                                {signUpError && <p className='text-error'>{signUpError}</p>}
                                <Toaster />
                                <p>Already have an account?<Link className='text-black font-bold' to='/login'> Login </Link></p>
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
                <img src={signup} className="w-full rounded-lg " />
            </div>
        </div>
    );
};

export default Signup;