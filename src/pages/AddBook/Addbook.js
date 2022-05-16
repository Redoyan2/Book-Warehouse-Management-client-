import React from 'react';
import { useForm } from "react-hook-form";

const AddBook = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url =`https://secure-ocean-24441.herokuapp.com/book`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            
        })
        
    };

    return (
        <div className='w-50 mx-auto my-5'>
            <h3>Add Your Book </h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Book Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description' {...register("description", )} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='btn btn-info' type="submit" value="Add Book" />
            </form>
        </div>
    );
};

export default AddBook;