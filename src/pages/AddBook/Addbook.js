import React from 'react';
import { useForm } from "react-hook-form";

const AddBook = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='w-50 mx-auto my-5'>
            <h3>Add Your Book </h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description' {...register("description", )} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddBook;