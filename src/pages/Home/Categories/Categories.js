import React from 'react';
import './Categories.css';
import img1 from '../../../Images/categories/book-3.jpg';
import img2 from '../../../Images/categories/book-4.jpg';
import img3 from '../../../Images/categories/book-5.jpg';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const navigate = useNavigate();
    const processedCheckout =()=>{
        navigate('/checkout')
    }
    return (
        <div>
            <h2 className='bg-info py-3 my-2 service-title'>BOOKS CATEGORIES </h2>
            <div  className='services'>
                <div className='service'>
                    <img className='w-100' src={img1} alt="" />
                    <h2 className='text-info'>Literary Fiction</h2>
                    <h4>Price: $10</h4>
                    <h4>Quantity: 120</h4>
                    <h4>Supplier: Zaman Library</h4>
                    <p>Literary fiction is a category of novels that emphasize style, character, and theme over plot. 
                    Lit fic is often defined in contrast to genre fiction and commercial fiction</p>
                    <button onClick={processedCheckout} className='btn btn-info'>Update</button>
                </div>
                <div className='service'>
                    <img className='w-100' src={img2} alt="" />
                    <h2 className='text-info'>Detective and Mystery</h2>
                    <h4>Price: $20</h4>
                    <h4>Quantity: 120</h4>
                    <h4>Supplier: Zaman Library</h4>
                    <p>Mystery narratives require hidden secrets, which over the course of the text are revealed or discovered.
                     Detective fiction is related in that it too narrates</p>
                    <button onClick={processedCheckout} className='btn btn-info'>Update</button>
                </div>
                <div className='service'>
                    <img className='w-100' src={img3} alt="" />
                    <h2 className='text-info'>Historical Fiction</h2>
                    <h4>Price: $10</h4>
                    <h4>Quantity: 120</h4>
                    <h4>Supplier: Zaman Library</h4>
                    <p>Historical fiction is a literary genre in which the plot takes place in a ·
                     An essential element of historical fiction is that it is set in the past and pays</p>
                    <button onClick={processedCheckout} className='btn btn-info'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Categories;