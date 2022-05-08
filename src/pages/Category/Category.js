import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';

const Category = ({service}) => {
    const {id, name, img, description, price, quantity, supplier} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>Name: {name}</h2>
            <h4>Supplier: {supplier}</h4>
            <h4>Quantity: {quantity}</h4>
            
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-info'>UPDATE</button>
        </div>
    );
};

export default Category;