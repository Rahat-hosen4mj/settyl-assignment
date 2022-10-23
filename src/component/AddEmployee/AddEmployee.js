import React from "react";
import { useForm } from "react-hook-form";


const AddEmployee = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey='809333cd2653b2fe985b53469c60e38c';
    const onSubmit = (data) =>{ 
    console.log(data)
    const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const player = {
                    employee_name: data.name,
                    employee_salary: data.number,
                    profile_image: img
                }

                fetch('http://localhost:5000/employee',{
                    method: "POST",
                    headers:{
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(player)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        alert('employee add successful')
                        reset();
                    }
                })
            }
        })
   };
  return (
    <div className="border border-3 border-red-400 w-96 mx-auto px-8 shadow-sm">
    <h2 className="text-2xl">Add a new Player</h2>
    <form   onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input
                type="text"
                placeholder="player Name"
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
                <span className="label-text">Short Description</span>
            </label>
            <input
                type="number"
                placeholder="age"
                className="input input-bordered w-full max-w-xs"
                {...register("number", {
                    required: {
                        value: true,
                        message: 'number is Required'
                    }
                })}
            />
            <label className="label">
                {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
            </label>
        </div>
        <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
    </form>
</div>
  );
};

export default AddEmployee;
