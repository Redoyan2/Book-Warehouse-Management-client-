import React from 'react';
import './Categories.css';
import img1 from '../../../Images/sections/ceremony.jpg';
import img2 from '../../../Images/sections/home.jpg';
import img3 from '../../../Images/sections/office.jpg';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const navigate = useNavigate();
    const processedCheckout =()=>{
        navigate('/checkout')
    }
    return (
        <div>
            <h2 className='bg-info py-3 my-2 service-title'>OUR CATEGORIES </h2>
            <div  className='services'>
                <div className='service'>
                    <img className='w-100' src={img1} alt="" />
                    <h2 className='text-info'>For Ceremony</h2>
                    <h4>Price: Tk. 180/person</h4>
                    <p>You can contact with us for your hole month services</p>
                    <button onClick={processedCheckout} className='btn btn-info'>Confirm</button>
                </div>
                <div className='service'>
                    <img className='w-100' src={img2} alt="" />
                    <h2 className='text-info'>For Office </h2>
                    <h4>Price: Tk. 170/person</h4>
                    <p>You can contact with us for your hole month services</p>
                    <button onClick={processedCheckout} className='btn btn-info'>Confirm</button>
                </div>
                <div className='service'>
                    <img className='w-100' src={img3} alt="" />
                    <h2 className='text-info'>For Home </h2>
                    <h4>Price: Tk. 190/person</h4>
                    <p>You can contact with us for your hole month services</p>
                    <button onClick={processedCheckout} className='btn btn-info'>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Categories;