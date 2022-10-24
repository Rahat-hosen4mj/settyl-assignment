import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddUser = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey='809333cd2653b2fe985b53469c60e38c';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const user = {
                    first_name: data.name,
                    email: data.email,
                    
                    avatar: img
                }
                // send to your database 
                fetch('https://morning-hamlet-36762.herokuapp.com/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                       
                    },
                    body: JSON.stringify(user)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('User added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the user');
                    }
                })
            }
        })
       
    }

    return (
        <div className='border border-3 border-blue-400 w-96 mx-auto p-8 shadow-sm rounded'>
        <h2 className="text-2xl">Add a New user</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    placeholder="User Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="User Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })}
                />
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input
                    type="file"
                    className="input input-bordered w-full max-w-xs"
                    {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
            </div>

            <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
        </form>
    </div>
    );
};

export default AddUser;