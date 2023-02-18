import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";



const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const imgbbKey = "c9676d6afe83a61758e6de9dce888c9b"
    console.log(imgbbKey)

    const navigate = useNavigate()

    const handleAddDoctor = data => {

        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const items = {
                        seller_name: data.name,
                        name: data.product,
                        email: data.email,
                        status: "Unsold",
                        isVerified: "No",
                        phone: data.phoneNumber,
                        location: data.location,
                        price: data.price,
                        picture: imgData.data.url

                    }

                    console.log(items)
                    fetch(`https://glamy-girl-server.vercel.app/addProduct`, {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(items)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.product} added successfully`)
                            navigate('/dashboard/product')
                        })

                }
            })
    }

    return (
        <div className='my-10 mb-60 text-start px-6'>
            <h1 className='text-white-500 text-xs font-bold mb-2'>Admin Action Board</h1>
            <h1 className='text-4xl font-bold  text-black mb-10 '>Add Products</h1>

            <form className="" onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full mb-1">
                    <label className="label">
                        <span className="label-text text-black">Your name - </span>
                    </label>
                    <input type='text' defaultValue={user?.displayName} placeholder="Insert your name" className='input input-bordered input-primary' {...register("name", { required: "is required" })} />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full mb-1">
                    <label className="label">
                        <span className="label-text text-black">Product - </span>
                    </label>
                    <input type='text' placeholder="Insert product name" className='input input-bordered input-primary' {...register("product", { required: "is required" })} />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full mb-1">
                    <label className="label">
                        <span className="label-text text-black">Email address -</span>
                    </label>
                    <input type='text' placeholder="Insert email" className='input input-bordered input-primary'  {...register("email",)} />
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                </div>


                <div className="form-control w-full mb-1">
                    <label className="label">
                        <span className="label-text text-black">Price -</span>
                    </label>
                    <input type='text' placeholder="Insert price" className='input input-bordered input-primary' {...register("price", { required: "is required" })} />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full mb-1">
                    <label className="label">
                        <span className="label-text text-black">Phone number - </span>
                    </label>
                    <input type='text' placeholder="Insert phone number" className='input input-bordered input-primary' {...register("phoneNumber", { required: "is required" })} />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full mb-1">
                    <label className="label">
                        <span className="label-text text-black">Location - </span>
                    </label>
                    <input placeholder="Insert year of location" type='text' className='input input-bordered input-primary' {...register("location", { required: "is required" })} />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>
                     <div className="form-control w-full mb-1 pb-6">

                    <div className="form-control w-full mb-1">
                        <label className="label">
                            <span className="label-text text-black">Upload image -</span>
                        </label>
                        <input type='file' className='input input-bordered input-primary py-2' {...register("img", { required: "is required" })} />
                        {errors.img && <p className='text-error'>{errors.img?.message}</p>}
                    </div>


                </div>


                <input className='btn btn-primary w-full mb-1' value='Add Product' type="submit" />
                <Toaster />
            </form>

        </div>

    );
};

export default AddProduct;